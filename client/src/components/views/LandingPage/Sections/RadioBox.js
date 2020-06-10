import React, { useState } from "react";
import { Collapse, Radio } from "antd";
const { Panel } = Collapse;

const price = [
  {
    _id: 0,
    name: "All",
    array: [],
  },
  {
    _id: 1,
    name: "$0 - $50",
    array: [0, 50],
  },
  {
    _id: 2,
    name: "$50 - $250",
    array: [50, 250],
  },
  {
    _id: 3,
    name: "$250 - $1,000",
    array: [250, 1000],
  },
  {
    _id: 4,
    name: ">$1,000",
    array: [1000, 1000000],
  },
];

function RadioBox(props) {
  const [Value, setValue] = useState("0");

  const renderRadioBox = () =>
    price.map((value) => (
      <Radio key={value._id} value={`${value._id}`}>
        {value.name}
      </Radio>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);

    props.handleFilters(event.target.value);
  };
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Price" key="1">
          <Radio.Group onChange={handleChange} value={Value}>
            {renderRadioBox()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
