import React from "react";
import { Table } from "antd";
import "./CustomTable.css"; // custom styles here

const dataSource = [
  {
    key: "1",
    name: "John Doe",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "Jane Smith",
    age: 28,
    address: "221B Baker Street",
  },
  {
    key: "3",
    name: "Sam Wilson",
    age: 40,
    address: "742 Evergreen Terrace",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const CustomTable = () => {
  return (
    <div className="custom-table-wrapper">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        className="custom-ant-table"
        size="middle"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default CustomTable;
