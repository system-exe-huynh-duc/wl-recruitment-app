"use client";

import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";

/**
 * UIButton là component bao bọc của Ant Design Button.
 * Bạn chỉ cần truyền các prop của ButtonProps để sử dụng.
 */
export default function UIButton(props: ButtonProps) {
  return <AntdButton {...props} />;
}
