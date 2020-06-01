import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";

const { Title } = Typography;
const { TextArea } = Input;

const Sizes = [
  { key: 0, value: "--" },
  { key: 1, value: "XS" },
  { key: 2, value: "S" },
  { key: 3, value: "M" },
  { key: 4, value: "L" },
  { key: 5, value: "XL" },
  { key: 6, value: "XXL" },
];

function UploadProductPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [SizeValue, setSizeValue] = useState(0);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onSizeChange = (event) => {
    setSizeValue(event.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Product</Title>
      </div>

      <Form onSubmit>
        <FileUpload />
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price(USD)</label>
        <Input onChange={onPriceChange} value={PriceValue} type="number" />
        <br />
        <br />
        <label>Size</label>
        <br />
        <select onChange={onSizeChange} value={SizeValue}>
          {Sizes.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <select key value>
          <option key value></option>
        </select>

        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
