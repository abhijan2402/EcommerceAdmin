import React, { useState } from "react";
import { Button, Space, Tag } from "antd";
import {
  EditOutlined,
  StopOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { getStatusColor } from "../../Utills/Utills";

const Customers = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 2,
  });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const dataSource = [
    {
      key: "1",
      fullname: "John Doe",
      age: 28,
      gender: "Male",
      email: "john@example.com",
      phone: "9876543210",
      address: "123, Baker Street",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001",
      status: "active",
    },
    {
      key: "2",
      fullname: "Priya Sharma",
      age: 32,
      gender: "Female",
      email: "priya@example.com",
      phone: "9876543211",
      address: "45, MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      status: "pending",
    },
  ];

  const columns = [
    { title: "Full Name", dataIndex: "fullname", key: "fullname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "Pincode", dataIndex: "pincode", key: "pincode" },
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
      render: () => (
        <Space>
          <Button icon={<EditOutlined />} />
          <Button icon={<StopOutlined />} danger />
          <Button icon={<CloseCircleOutlined />} danger />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Customers List</h2>
      <div>
        <CustomTable
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default Customers;
