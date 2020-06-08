import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
const { Panel } = Collapse;
const sizes = [
  {
    _id: 0,
    size: "--",
  },
  {
    _id: 1,
    size: "XS",
  },
  {
    _id: 2,
    size: "S",
  },
  {
    _id: 3,
    size: "M",
  },
  {
    _id: 4,
    size: "L",
  },
  {
    _id: 5,
    size: "XL",
  },
  {
    _id: 6,
    size: "XXL",
  },
];

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value); //Unchecked values
    } else {
      newChecked.splice(currentIndex, 1); //splice checked values out of state
    }

    setChecked(newChecked);
    props.handleFilters(newChecked); //updated checked state for parent component
  };

  const renderCheckboxLists = () =>
    sizes.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true} //toggle for matching checked id with state
        />
        <span>{value.size}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
