"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";

// Kiểu dữ liệu cho Job
interface Job {
  key: string;
  title: string;
  company: string;
  location: string;
  status: string;
}

export default function ManageJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = (key: string) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.key !== key));
    message.success("Job deleted successfully");
  };

  const columns: ColumnsType<Job> = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: Job) => (
        <div className="flex space-x-2">
          <Link href={`/admin/manage-jobs/edit/${record.key}`}>
            <Button type="link">Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this job?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Jobs</h1>
        <Link href="/admin/manage-jobs/create">
          <Button type="primary">Create New Job</Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={jobs} pagination={{ pageSize: 5 }} />
    </div>
  );
}
