import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Row, Col, Card } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";

const { Meta } = Card;

function LandingPage() {
  //create a state for product list
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(); //PostSize state for showing load more button
  const [Filters, setFilters] = useState({ sizes: [], price: [] });

  useEffect(() => {
    //fetch product data

    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card hoverable={true} cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const getProducts = (variables) => {
    axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        //Only adds more product when clicking the load more button
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }

        setPostSize(response.data.postSize);
      } else {
        alert("Failed to delivered your product");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getProducts(variables);

    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getProducts(variables); //get the products with the new filter state
    setSkip(0);
  };

  //handles and displays the filters into category for the controller to filter
  const handleFilters = (filters, category) => {
    console.log(filters);
    const newFilters = { ...Filters };
    console.log(newFilters);

    newFilters[category] = filters;

    if (category === "price") {
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          JayBee's Shop <Icon type="shop" />
        </h2>
      </div>

      {/* Filter */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            handleFilters={(filters) => handleFilters(filters, "sizes")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <RadioBox
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row>

      {/*Search*/}

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No product available...More shall come!</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      {/* Post*/}
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
