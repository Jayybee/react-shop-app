import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">
          JB's
          <svg height="35" viewBox="0 0 70 35">
            <g>
              <path
                id="svg_1"
                fill-rule="nonzero"
                fill="rgb(41.176471%,44.705882%,85.490196%)"
                d="m30.89453,25.57813l-20.23047,0c-0.46875,0 -0.875,-0.32422 -0.98047,-0.78516l-5.10156,-22.10156l-3.57422,0c-0.55468,0 -1.00781,-0.44922 -1.00781,-1.00782c0,-0.55859 0.45313,-1.01171 1.00781,-1.01171l4.375,0c0.47266,0 0.87891,0.32421 0.98438,0.78515l5.10156,22.10156l19.42578,0c0.5586,0 1.00781,0.44922 1.00781,1.00782c0,0.55859 -0.44921,1.01172 -1.00781,1.01172zm0,0"
              />
              <path
                id="svg_2"
                fill-rule="nonzero"
                fill="rgb(8.627451%,57.254902%,100%)"
                d="m34.77734,5.08984c-0.1914,-0.23828 -0.48046,-0.3789 -0.78515,-0.3789l-27.67578,0c-0.3086,0 -0.59766,0.14062 -0.78907,0.38281c-0.1914,0.23828 -0.26562,0.55469 -0.19531,0.85547l3.10547,13.46094c0.10938,0.45703 0.51563,0.78125 0.98438,0.78125l21.53906,0c0.47265,0 0.88281,-0.32813 0.98437,-0.78516l3.03125,-13.46484c0.06641,-0.29688 -0.00781,-0.61328 -0.19922,-0.85157zm0,0"
              />
              <path
                id="svg_3"
                fill-rule="nonzero"
                fill="rgb(41.176471%,44.705882%,85.490196%)"
                d="m14.80859,26.92188c-2.04296,0 -3.70312,1.66015 -3.70312,3.70312c0,2.04297 1.66016,3.70313 3.70312,3.70313c2.03907,0 3.69922,-1.66016 3.69922,-3.70313c0,-2.04297 -1.66015,-3.70312 -3.69922,-3.70312zm0,0"
              />
              <path
                id="svg_4"
                fill-rule="nonzero"
                fill="rgb(30.980392%,36.862745%,77.647059%)"
                d="m26.92188,26.92188c-2.03907,0 -3.69922,1.66015 -3.69922,3.70312c0,2.04297 1.66015,3.70313 3.69922,3.70313c2.04296,0 3.70312,-1.66016 3.70312,-3.70313c0,-2.04297 -1.66016,-3.70312 -3.70312,-3.70312zm0,0"
              />
              <path
                id="svg_5"
                fill-rule="nonzero"
                fill="rgb(30.980392%,36.862745%,77.647059%)"
                d="m30.89453,23.55859l-13.39453,0l0,2.01954l13.39453,0c0.5586,0 1.00781,-0.45313 1.00781,-1.01172c0,-0.5586 -0.44921,-1.00782 -1.00781,-1.00782zm0,0"
              />
              <path
                id="svg_6"
                fill-rule="nonzero"
                fill="rgb(0%,49.803922%,86.666667%)"
                d="m33.99219,4.71094l-16.49219,0l0,15.48047l13.46094,0c0.47265,0 0.88281,-0.32813 0.98437,-0.78516l3.03125,-13.46484c0.06641,-0.29688 -0.00781,-0.61328 -0.19922,-0.85157c-0.1914,-0.23828 -0.48046,-0.3789 -0.78515,-0.3789zm0,0"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
