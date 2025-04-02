"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from "next/navigation";
import UserDropdown from "./admin/user-dropdown";

export default function Navbar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md">
      {/* Phần logo và các link điều hướng */}
      <div className="flex space-x-4">
        {!isAdmin && (
          <>
            <Link href="/">
              <span className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer">
                Logo
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 dark:text-gray-300 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 dark:text-gray-300 cursor-pointer">
                Contact
              </span>
            </Link>
          </>
        )}
      </div>

      {/* Component DarkModeToggle được tích hợp trực tiếp trong Navbar */}
      <div className="flex gap-4">
        <DarkModeToggle />
        {isAdmin && <UserDropdown />}
      </div>
    </nav>
  );
}
