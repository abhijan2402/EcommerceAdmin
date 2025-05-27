import React from "react";
import { Table, Tag, Typography, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const dummyTickets = [
  {
    id: "TKT001",
    title: "Issue with order not delivered",
    status: "Open",
    createdBy: "User",
    assignedTo: "Delivery",
    createdAt: "2025-05-27",
  },
  {
    id: "TKT002",
    title: "Product mismatch",
    status: "In Progress",
    createdBy: "User",
    assignedTo: "Vendor",
    createdAt: "2025-05-25",
  },
  {
    id: "TKT003",
    title: "Vendor not responding",
    status: "Closed",
    createdBy: "Delivery",
    assignedTo: "Admin",
    createdAt: "2025-05-20",
  },
];

const getStatusTag = (status) => {
  switch (status) {
    case "Open":
      return <Tag color="blue">Open</Tag>;
    case "In Progress":
      return <Tag color="orange">In Progress</Tag>;
    case "Closed":
      return <Tag color="green">Closed</Tag>;
    default:
      return <Tag>{status}</Tag>;
  }
};

const columns = [
  {
    title: "Ticket ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <Text strong>{text}</Text>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => getStatusTag(status),
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
    key: "createdBy",
  },
  {
    title: "Assigned To",
    dataIndex: "assignedTo",
    key: "assignedTo",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => (
      <Text type="secondary">
        <ClockCircleOutlined /> {date}
      </Text>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button type="link" onClick={() => alert(`Viewing ticket ${record.id}`)}>
        View Details
      </Button>
    ),
  },
];

const TicketListTable = () => {
  return (
    <div style={{ padding: 24 }}>
      <Table
        columns={columns}
        dataSource={dummyTickets}
        rowKey="id"
        bordered
        title={() => <h3 style={{ margin: 0 }}>Ticket List</h3>}
      />
    </div>
  );
};

export default TicketListTable;
