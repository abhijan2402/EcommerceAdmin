import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const sidebarWidth = collapsed ? 80 : 70;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <div
        style={{
          marginLeft: sidebarWidth,
          width: "100%",
          transition: "margin-left 0.3s",
        }}
      >
        <Topbar />
        <main style={{ margin: "70px 20px 20px 20px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
