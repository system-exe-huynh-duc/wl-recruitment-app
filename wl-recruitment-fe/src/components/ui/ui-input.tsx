"use client";

import React from "react";
import { Input as AntdInput, InputProps } from "antd";

/**
 * UIInput là component bao bọc của Ant Design Input.
 * Nó nhận tất cả các prop của InputProps để sử dụng linh hoạt.
 */
export default function UIInput(props: InputProps) {
  return <AntdInput {...props} />;
}
