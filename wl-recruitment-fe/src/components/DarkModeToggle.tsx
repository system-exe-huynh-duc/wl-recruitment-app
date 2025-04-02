"use client";

import { useState, useEffect } from "react";
import {
  SunOutlined,
  MoonOutlined
} from "@ant-design/icons";

export default function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Khởi tạo trạng thái dark mode từ localStorage hoặc hệ thống
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Nếu chưa lưu theme, kiểm tra theo hệ thống:
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Hàm thay đổi chế độ dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
    >
      {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
    </button>
  );
};