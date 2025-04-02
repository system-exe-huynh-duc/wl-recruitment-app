// src/mirage/server.ts
import { createServer, Server } from "miragejs";
import { jobRoutes } from "./routes/jobs";

export function makeServer({ environment = "development" } = {}) {
  const server: Server = createServer({
    environment,
    routes() {
      // Đặt namespace chung cho các API
      this.namespace = "api";

      // Gọi các route module, sử dụng .call(this) để truyền ngữ cảnh của MirageJS Server
      jobRoutes.call(this);

      // Cho phép các request không bị MirageJS chặn (ví dụ các asset hay API thực)
      this.passthrough();
    },
  });

  return server;
}
