import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Select, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
  images: Yup.array()
    .min(1, "At least one image is required")
    .max(5, "You can only upload up to 5 images"),
});

const SingleProductForm = () => {
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e, setFieldValue, values) => {
    const files = Array.from(e.target.files);
    const totalSelected = files.length + values.images.length;

    if (totalSelected > 5) {
      message.error("You can only upload up to 5 images.");
      return;
    }

    const updatedFiles = [...values.images, ...files];
    const updatedPreviews = [
      ...previewImages,
      ...files.map((file) => URL.createObjectURL(file)),
    ];

    setFieldValue("images", updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  const removeImage = (index, setFieldValue, values) => {
    const updatedFiles = [...values.images];
    const updatedPreviews = [...previewImages];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setFieldValue("images", updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: "",
        category: "",
        images: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitted single product:", values);
        message.success("Product created successfully!");
        resetForm();
        setPreviewImages([]);
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <div style={{ marginBottom: 16 }}>
            <label>Product Name</label>
            <Field name="name">
              {({ field }) => (
                <Input {...field} placeholder="Enter product name" />
              )}
            </Field>
            {touched.name && errors.name && (
              <div style={{ color: "red" }}>{errors.name}</div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Description</label>
            <Field name="description">
              {({ field }) => (
                <TextArea {...field} rows={4} placeholder="Enter description" />
              )}
            </Field>
            {touched.description && errors.description && (
              <div style={{ color: "red" }}>{errors.description}</div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Price</label>
            <Field name="price">
              {({ field }) => <Input {...field} placeholder="Enter price" />}
            </Field>
            {touched.price && errors.price && (
              <div style={{ color: "red" }}>{errors.price}</div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Category</label>
            <Field name="category">
              {({ field }) => (
                <Select
                  {...field}
                  onChange={(value) => setFieldValue("category", value)}
                  placeholder="Select category"
                  style={{ width: "100%" }}
                >
                  <Option value="electronics">Electronics</Option>
                  <Option value="fashion">Fashion</Option>
                  <Option value="grocery">Grocery</Option>
                </Select>
              )}
            </Field>
            {touched.category && errors.category && (
              <div style={{ color: "red" }}>{errors.category}</div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Upload Images (Min: 1, Max: 5)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageChange(e, setFieldValue, values)}
            />
            {touched.images && errors.images && (
              <div style={{ color: "red" }}>{errors.images}</div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 12 }}>
              {previewImages.map((src, idx) => (
                <div key={idx} style={{ position: "relative", marginRight: 8 }}>
                  <img
                    src={src}
                    alt={`preview-${idx}`}
                    style={{ width: 80, height: 80, objectFit: "cover" }}
                  />
                  <Button
                    type="text"
                    size="small"
                    danger
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      fontWeight: "bold",
                      background: "rgba(208, 206, 206, 0.8)",
                      border: "1px solid red",
                    }}
                    onClick={() => removeImage(idx, setFieldValue, values)}
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            style={{ width: "100%" }}
          >
            Create Product
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SingleProductForm;
