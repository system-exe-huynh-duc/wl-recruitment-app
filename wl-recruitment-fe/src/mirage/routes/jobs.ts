// src/mirage/routes/jobs.ts
import { Server } from "miragejs";

export function jobRoutes(this: Server) {
  // GET /api/jobs: Lấy danh sách job
  this.get("/jobs", () => {
    return [
      {
        key: "1",
        title: "Frontend Developer",
        company: "ABC Corp",
        location: "HCM",
        status: "Pending",
      },
      {
        key: "2",
        title: "Backend Developer",
        company: "XYZ Ltd",
        location: "Hanoi",
        status: "Approved",
      },
      {
        key: "3",
        title: "Full Stack Developer",
        company: "DEF Inc",
        location: "Danang",
        status: "Rejected",
      },
    ];
  });
  
  // Bạn có thể thêm các endpoint khác như POST, PUT, DELETE cho Job nếu cần.
}
