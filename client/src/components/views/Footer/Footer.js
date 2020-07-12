import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <a href="https://github.com/JaisonBinns/react-shop-app">
        Source Code: <Icon type="github" />
      </a>
    </div>
  );
}

export default Footer;
