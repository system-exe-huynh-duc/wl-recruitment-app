// src/app/admin/layout.tsx
import SideBar from "@/components/admin/SideBar";
import Navbar from "@/components/Navbar";
import React from "react";
import type { ReactNode } from "react";

export const metadata = {
  title: "Admin Panel - Recruitment Project",
  description: "Admin portal for managing recruitment project",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar cho khu vực admin */}
      <SideBar />

      {/* Phần nội dung chính */}
      <div className="flex-1 flex flex-col">
        {/* Header admin */}
        <Navbar/>

        {/* Nội dung trang */}
        <main className="p-4 flex-1">
          {children}
        </main>

        {/* Footer admin */}
        <footer className="bg-gray-200 text-center p-4">
          © 2023 Recruitment Project
        </footer>
      </div>
    </div>
  );
}
