import React, { useState } from "react";
import { Button, Space, Tag, Modal, Image } from "antd";
import {
  EditOutlined,
  StopOutlined,
  CloseCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { getStatusColor } from "../../Utills/Utills";

const Delivery = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showImageModal = (img) => {
    setPreviewImage(img);
    setIsModalVisible(true);
  };

  const handleCancel = () => setIsModalVisible(false);

  const dataSource = [
    {
      key: "1",
      fullname: "Ravi Kumar",
      age: 30,
      gender: "Male",
      email: "ravi@example.com",
      phone: "9876543210",
      deliveryPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIe4iEVy5y-4JN7yP3VQTR0cmuBf5abTEA&s",
      vehicleType: "Bike",
      vehicleBrand: "Honda",
      vehicleModel: "Shine",
      vehiclePhotoFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU1ne0ThYY7sT5PkP_HJ0dRIJ4lGOTnqQXQ&s",
      vehiclePhotoBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU1ne0ThYY7sT5PkP_HJ0dRIJ4lGOTnqQXQ&s",

      licensePhoto:
        "https://static.toiimg.com/thumb/msid-107486895,imgsize-70752,minWidth-400,resizemode-4/107486895.jpg",

      vehicleRCFront:
        "https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=c-tDqF5B4t2i_eoJXwWsUK05q8ORuLmRbeCa7weLtGc=",
      vehicleRCBack:
        "https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=c-tDqF5B4t2i_eoJXwWsUK05q8ORuLmRbeCa7weLtGc=",
      status: "active",
    },
    {
      key: "2",
      fullname: "Aman Singh",
      age: 26,
      gender: "Male",
      email: "aman@example.com",
      phone: "9998887777",
      deliveryPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIe4iEVy5y-4JN7yP3VQTR0cmuBf5abTEA&s",
      vehicleType: "Bike",
      vehicleBrand: "Honda",
      vehicleModel: "Shine",
      vehiclePhotoFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU1ne0ThYY7sT5PkP_HJ0dRIJ4lGOTnqQXQ&s",
      vehiclePhotoBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU1ne0ThYY7sT5PkP_HJ0dRIJ4lGOTnqQXQ&s",

      licensePhoto:
        "https://static.toiimg.com/thumb/msid-107486895,imgsize-70752,minWidth-400,resizemode-4/107486895.jpg",

      vehicleRCFront:
        "https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=c-tDqF5B4t2i_eoJXwWsUK05q8ORuLmRbeCa7weLtGc=",
      vehicleRCBack:
        "https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=c-tDqF5B4t2i_eoJXwWsUK05q8ORuLmRbeCa7weLtGc=",
      status: "pending",
    },
  ];

  const renderImage = (imgUrl) => (
    <Space>
      <Image
        minWidth={40}
        height={40}
        src={imgUrl}
        alt="preview"
        style={{ objectFit: "cover", borderRadius: 4 }}
      />
      <Button
        icon={<EyeOutlined />}
        onClick={() => showImageModal(imgUrl)}
        type="link"
      />
    </Space>
  );

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
      minWidth: 200,
    },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title: "Delivery Photo",
      dataIndex: "deliveryPhoto",
      key: "deliveryPhoto",
      render: renderImage,
      minWidth: 140,
    },
    {
      title: "Vehicle Front",
      dataIndex: "vehiclePhotoFront",
      key: "vehiclePhotoFront",
      render: renderImage,
      minWidth: 140,
    },
    {
      title: "Vehicle Back",
      dataIndex: "vehiclePhotoBack",
      key: "vehiclePhotoBack",
      render: renderImage,
      minWidth: 140,
    },
    {
      title: "License Photo",
      dataIndex: "licensePhoto",
      key: "licensePhoto",
      render: renderImage,
      minWidth: 140,
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicleType",
      key: "vehicleType",
      minWidth: 140,
    },
    {
      title: "Vehicle Brand",
      dataIndex: "vehicleBrand",
      key: "vehicleBrand",
      minWidth: 140,
    },
    {
      title: "Vehicle Model",
      dataIndex: "vehicleModel",
      key: "vehicleModel",
      minWidth: 140,
    },
    {
      title: "RC Front",
      dataIndex: "vehicleRCFront",
      key: "vehicleRCFront",
      render: renderImage,
      minWidth: 140,
    },
    {
      title: "RC Back",
      dataIndex: "vehicleRCBack",
      key: "vehicleRCBack",
      render: renderImage,
      minWidth: 140,
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
      <h2>Delivery List</h2>
      <CustomTable
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        title="Image Preview"
      >
        <Image minWidth={"100%"} src={previewImage} />
      </Modal>
    </div>
  );
};

export default Delivery;
