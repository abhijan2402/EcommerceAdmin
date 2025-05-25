import React, { useState } from "react";
import { Table, Button, Modal, Image, Tag, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined, SyncOutlined } from "@ant-design/icons";
import CustomTable from "../../components/CustomTable/CustomTable";

// Utility to get color for status tags
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "in stock":
      return "green";
    case "out of stock":
      return "volcano";
    case "not available":
      return "default";
    default:
      return "blue";
  }
};

const initialProducts = [
  {
    key: "1",
    name: "Apple iPhone 14",
    price: "$999",
    description: "Latest Apple iPhone 14 with A15 Bionic chip",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-family-select?wid=940&hei=1112&fmt=png-alpha&.v=1660746299936",
    status: "In Stock",
  },
  {
    key: "2",
    name: "Samsung Galaxy S23",
    price: "$799",
    description: "Samsung flagship with amazing camera",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911ezgjinu/gallery/in-galaxy-s23-ultra-s911-425597-sm-s911ezgjinu-530470385?$720_576_PNG$",
    status: "Out of Stock",
  },
  {
    key: "3",
    name: "OnePlus 11",
    price: "$699",
    description: "OnePlus flagship with Hasselblad camera",
    image:
      "https://image01.oneplus.net/ebp/202302/23/1-m00-12-f3-rb8bwl_fjviac1tmablsjscihzq375_840_840.png",
    status: "Not Available",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (url) => {
    setModalImage(url);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setProducts(products.filter((product) => product.key !== key));
    message.success("Product deleted successfully.");
  };

  const handleEdit = (record) => {
    message.info(`Edit clicked for ${record.name}`);
    // Implement actual edit logic here (modal or redirect)
  };

  const toggleStatus = (key) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.key === key) {
          let newStatus = "In Stock";
          if (product.status === "In Stock") newStatus = "Out of Stock";
          else if (product.status === "Out of Stock") newStatus = "In Stock";
          else newStatus = "In Stock"; // reset from Not Available
          return { ...product, status: newStatus };
        }
        return product;
      })
    );
    message.success("Product status updated.");
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url) => (
        <Image
          src={url}
          width={80}
          preview={false}
          style={{ cursor: "pointer", borderRadius: 4 }}
          onClick={() => handleImageClick(url)}
          alt="Product"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={getStatusColor(status)} style={{ fontWeight: "bold" }}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>

          <Button
            type="default"
            icon={<SyncOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => toggleStatus(record.key)}
            title="Toggle In Stock / Out of Stock"
          />

          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon={<DeleteOutlined />} />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 20 }}>Product List</h2>
      <CustomTable
        columns={columns}
        dataSource={products}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        centered
      >
        <img src={modalImage} alt="Product" style={{ width: "100%" }} />
      </Modal>
    </div>
  );
};

export default ProductList;
