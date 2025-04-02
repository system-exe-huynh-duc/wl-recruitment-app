// src/components/SideBar.tsx
"use client";

import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  DashboardOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function SideBar() {
  const menuItems = [
    {
      label: <Link href="/admin/dashboard">Dashboard</Link>,
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: <Link href="/admin/manage-jobs">Manage Jobs</Link>,
      key: "manage-jobs",
      icon: <FileTextOutlined />,
    },
    {
      label: <Link href="/admin/manage-users">Manage Users</Link>,
      key: "manage-users",
      icon: <UserOutlined />,
    },
    {
      label: <Link href="/admin/settings">Settings</Link>,
      key: "settings",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-xl text-center font-bold mb-4">Admin</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </div>
    </aside>
  );
}
