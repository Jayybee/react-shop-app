import React from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  const addToCartFunction = () => {
    props.addToCart(props.detail._id);
  };
  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Size">{props.detail.size}</Descriptions.Item>
        <Descriptions.Item label="Views">
          {props.detail.views}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCartFunction}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
