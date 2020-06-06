import React, { useState, useEffect } from "react";
import axios from "axios";

function LandingPage() {
  //create a state for product list
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    //fetch product data
    axios.post("/api/product/getProducts").then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);

        console.log(response.data.products);
      } else {
        alert("Failed to delivered your product");
      }
    });
  }, []);
  return <></>;
}

export default LandingPage;
