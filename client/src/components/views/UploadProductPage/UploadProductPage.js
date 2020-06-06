import axios from "axios";
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

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [SizeValue, setSizeValue] = useState(0);
  const [Images, setImages] = useState([]);

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

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };

  //Submit form property values to
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !DescriptionValue || !PriceValue || !Images) {
      return alert("Please complete all required fields!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      size: SizeValue,
      images: Images,
    };

    axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product posted!");
        props.history.push("/");
      } else {
        alert("Failed to Upload Product :(");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Product</Title>
      </div>

      <Form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
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
        <select onChange={onSizeChange}>
          {Sizes.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
