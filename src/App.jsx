// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Settings from "./pages/Settings";
import ProductList from "./pages/Product/ProductList";
import Vendors from "./pages/Users/Vendors";
import Customers from "./pages/Users/Customers";
import Delivery from "./pages/Users/Delivery";
import OrderList from "./pages/Orders/OrderList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected layout wrapper with nested routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="users/vendor" element={<Vendors />} />
          <Route path="users/customer" element={<Customers />} />
          <Route path="users/delivery" element={<Delivery />} />
          <Route path="products/list" element={<ProductList />} />
          <Route path="orders/list" element={<OrderList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
