"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  appliedDate: string;
  status: string;
}

export default function UsersPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Ví dụ fetch từ API
    fetch("/api/admin/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data.candidates));
  }, []);

  // Lọc theo tên/email
  const filtered = candidates.filter((c) =>
    `${c.name} ${c.email}`.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header: tiêu đề + search + nút thêm */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl font-bold">Quản lý ứng viên</h1>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Tìm kiếm ứng viên..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Link href="/admin/users/new">
            <Button>Thêm ứng viên</Button>
          </Link>
        </div>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-auto rounded-md border">
        <Table>
          <TableCaption>Danh sách ứng viên</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Họ tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Điện thoại</TableHead>
              <TableHead>Ngày nộp</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>
                  {new Date(c.appliedDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{c.status}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/admin/users/${c.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Sửa</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      // TODO: gọi API xóa
                      console.log("Xóa", c.id);
                    }}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Xóa</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  Không có ứng viên nào
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
