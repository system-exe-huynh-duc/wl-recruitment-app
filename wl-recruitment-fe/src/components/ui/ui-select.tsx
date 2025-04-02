"use client";

import React from "react";
import { Select as AntdSelect, SelectProps } from "antd";

// Đặt generic parameter T với default type là string
export default function UISelect<T = string>(props: SelectProps<T>) {
  return <AntdSelect {...props} />;
}
