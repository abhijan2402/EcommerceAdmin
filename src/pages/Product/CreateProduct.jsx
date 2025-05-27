import React, { useState } from "react";
import { Tabs } from "antd";
import { FaBox } from "react-icons/fa";
import SingleProductForm from "../../components/ProductFrom/SingleProductForm";
import BulkProductForm from "../../components/ProductFrom/BulkProductForm";

const { TabPane } = Tabs;

const CreateProduct = () => {
  const [bulkProducts, setBulkProducts] = useState([]);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
        border: "1px solid grey",
        borderRadius: "4px",
      }}
    >
      <h2>
        <FaBox style={{ marginRight: 8 }} />
        Product Management
      </h2>

      <Tabs defaultActiveKey="single">
        <TabPane tab="Single Product Upload" key="single">
          <SingleProductForm />
        </TabPane>
        <TabPane tab="Bulk Product Upload" key="bulk">
          <BulkProductForm
            bulkProducts={bulkProducts}
            setBulkProducts={setBulkProducts}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CreateProduct;
