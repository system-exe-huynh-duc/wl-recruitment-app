"use client";

import React from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

export interface DropdownItem {
  key: string;
  label: React.ReactNode;
  onClick?: () => void;
}

export interface UIDropdownProps {
  items: DropdownItem[];
  triggerElement: React.ReactNode;
}

export default function UIDropdown({ items, triggerElement }: UIDropdownProps) {
  // Chuyển đổi danh sách các mục thành định dạng cần thiết cho Ant Design
  const menu: MenuProps = {
    items: items.map((item) => ({
      key: item.key,
      label: item.label,
      onClick: item.onClick ? () => item.onClick?.() : undefined,
    })),
  };

  return (
    <Dropdown menu={menu} trigger={["click"]}>
      {triggerElement}
    </Dropdown>
  );
}