import React, { useState } from "react";
import { Table, Button, Modal, Image, Tag } from "antd";
import { EditOutlined, StopOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { getStatusColor } from "../../Utills/Utills";

const Vendors = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 2,
  });

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
    });
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
    },
    {
      title: "Shop Certificates",
      dataIndex: "shopCert",
      key: "shopCert",
      render: (url) => (
        <Image
          src={url}
          alt="Shop Cert"
          width={80}
          preview={false}
          onClick={() => handleImageClick(url)}
          style={{
            cursor: "pointer",
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
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
          />
          <Button
            type="default"
            danger
            icon={<StopOutlined />}
            style={{ marginRight: 8 }}
          />
          <Button type="ghost" icon={<DeleteOutlined />} />
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      fullname: "Rajesh Kumar",
      age: 35,
      gender: "Male",
      email: "rajesh@example.com",
      phone: "+91 9876543210",
      type: "Seller",
      date: "2025-05-01",
      shopName: "Rajesh Electronics",
      shopCert:
        "https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?semt=ais_hybrid&w=740",
      status: "Active",
    },
    {
      key: "2",
      fullname: "Anita Sharma",
      age: 29,
      gender: "Female",
      email: "anita@example.com",
      phone: "+91 9123456789",
      type: "Shopkeeper",
      date: "2025-04-20",
      shopName: "Anita's Boutique",
      shopCert:
        "https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?semt=ais_hybrid&w=740",
      status: "Blocked",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: 20 }}>Vendors List</h2>
      <CustomTable
        dataSource={data}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      />
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        centered
      >
        <img
          src={modalImage}
          alt="Shop Certificate"
          style={{ width: "100%" }}
        />
      </Modal>
    </div>
  );
};

export default Vendors;
