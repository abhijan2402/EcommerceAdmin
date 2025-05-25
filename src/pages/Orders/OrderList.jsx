import React, { useState } from "react";
import { Table, Button, Modal, Image, Tag, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Utility for status colors
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "created":
      return "blue";
    case "processing":
      return "orange";
    case "delivery":
      return "green";
    case "refund":
      return "red";
    default:
      return "default";
  }
};

// Sample initial orders
const initialOrders = [
  {
    key: "1",
    orderId: "ORD123456",
    referenceIds: ["REF001", "REF002", "REF003", "REF004", "REF005", "REF006"],
    orderName: "Order One",
    description: "This is the first order description",
    amount: "$120.00",
    orderType: "Delivery",
    date: "2025-05-20",
    status: "Created",
    orderImage: "https://cdn-icons-png.flaticon.com/512/890/890462.png",
  },
  {
    key: "2",
    orderId: "ORD789012",
    referenceIds: ["REF101", "REF102", "REF103", "REF104", "REF105", "REF106"],
    orderName: "Order Two",
    description: "This is the second order description",
    amount: "$250.00",
    orderType: "Self-Pickup",
    date: "2025-05-22",
    status: "Processing",
    orderImage: "https://cdn-icons-png.flaticon.com/512/890/890462.png",
  },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (url) => {
    setModalImage(url);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setOrders(orders.filter((order) => order.key !== key));
    message.success("Order deleted successfully.");
  };

  const handleEdit = (record) => {
    message.info(`Edit clicked for order ${record.orderId}`);
    // Implement actual edit functionality here (modal or redirect)
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      fixed: "left",
      width: 120,
    },
    {
      title: "Reference IDs",
      dataIndex: "referenceIds",
      key: "referenceIds",
      render: (refs) => (
        <div>
          {refs.map((ref, i) => (
            <Tag key={i} color="cyan" style={{ marginBottom: 2 }}>
              {ref}
            </Tag>
          ))}
        </div>
      ),
      width: 200,
    },
    {
      title: "Order Name",
      dataIndex: "orderName",
      key: "orderName",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      width: 250,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 100,
    },
    {
      title: "Order Type",
      dataIndex: "orderType",
      key: "orderType",
      width: 130,
      filters: [
        { text: "Delivery", value: "Delivery" },
        { text: "Self-Pickup", value: "Self-Pickup" },
      ],
      onFilter: (value, record) => record.orderType === value,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 120,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => (
        <Tag color={getStatusColor(status)} style={{ fontWeight: "bold" }}>
          {status.toUpperCase()}
        </Tag>
      ),
      filters: [
        { text: "Created", value: "Created" },
        { text: "Processing", value: "Processing" },
        { text: "Delivery", value: "Delivery" },
        { text: "Refund", value: "Refund" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Order Image",
      dataIndex: "orderImage",
      key: "orderImage",
      width: 120,
      render: (url) => (
        <Image
          src={url}
          width={40}
          preview={false}
          style={{ cursor: "pointer", borderRadius: 4 }}
          onClick={() => handleImageClick(url)}
          alt="Order"
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 140,
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
          <Popconfirm
            title="Are you sure you want to delete this order?"
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
      <h2 style={{ marginBottom: 20 }}>Order List</h2>
      <Table
        columns={columns}
        dataSource={orders}
        pagination={{ pageSize: 5 }}
        rowKey="key"
        scroll={{ x: 1300 }}
      />

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        centered
      >
        <img src={modalImage} alt="Order" style={{ width: "100%" }} />
      </Modal>
    </div>
  );
};

export default OrderList;
