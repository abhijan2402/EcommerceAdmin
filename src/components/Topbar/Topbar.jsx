import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import "./Topbar.css";

export default function Topbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="topbar">
      <h2 className="logo">Admin Panel</h2>
      <div className="theme-toggle">
        <Switch
          checked={darkMode}
          onChange={(checked) => setDarkMode(checked)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
      </div>
    </div>
  );
}
