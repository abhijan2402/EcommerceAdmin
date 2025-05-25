import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Switch, Dropdown, Space, Menu } from "antd";
import {
  DownOutlined,
  GlobalOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { changeLanguage } from "../../i18n.js";
import { useTranslation } from "react-i18next";
import "./Topbar.css";

const languages = [
  { code: "en", label: "English", icon: "https://flagcdn.com/w40/gb.png" },
  { code: "hi", label: "हिन्दी", icon: "https://flagcdn.com/w40/in.png" },
];

export default function Topbar() {
  const { darkMode, setDarkMode } = useTheme();
  const { i18n, t } = useTranslation();

  // Set default language if not in localStorage
  React.useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang.code);
  };

  const languageMenu = (
    <Menu>
      {languages.map((lang) => (
        <Menu.Item key={lang.code} onClick={() => handleLanguageChange(lang)}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
            }}
          >
            {/* <img
              src={lang.icon}
              alt={lang.label}
              style={{ width: "20px", height: "14px", objectFit: "cover" }}
            /> */}
            {lang.label}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="topbar">
      <h2 className="logo">{t("admin_panel")}</h2>

      <div className="topbar-controls">
        <Dropdown overlay={languageMenu} placement="bottomRight">
          <span className="lang-dropdown">
            <Space>
              {/* <img
                src={currentLang.icon}
                alt={currentLang.label}
                style={{ width: "20px", height: "14px", objectFit: "cover" }}
              /> */}
              <GlobalOutlined/>
              {currentLang.code}
              <DownOutlined />
            </Space>
          </span>
        </Dropdown>

        <div className="theme-toggle">
          <Switch
            checked={darkMode}
            onChange={(checked) => setDarkMode(checked)}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </div>
      </div>
    </div>
  );
}
