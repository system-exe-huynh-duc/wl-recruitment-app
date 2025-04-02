"use client";

import React from "react";
import UIDropdown, { DropdownItem } from "../ui/ui-dropdown";

export default function UserDropdown() {
  // Định nghĩa các mục dropdown cho trang admin
  const dropdownItems: DropdownItem[] = [
    {
      key: "profile",
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
    },
    {
      key: "settings",
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
    {
      key: "logout",
      label: "Logout",
      onClick: () => console.log("Logout clicked"),
    },
  ];

  // Phần tử kích hoạt dropdown: ở đây là icon user
  const triggerElement = (
    <button className="flex items-center text-gray-600 dark:text-gray-300 focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM12 14c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
      </svg>
    </button>
  );

  return <UIDropdown items={dropdownItems} triggerElement={triggerElement} />;
}