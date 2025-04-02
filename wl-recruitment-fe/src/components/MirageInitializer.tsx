"use client";

import { useEffect } from "react";

export default function MirageInitializer() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("../mirage/server").then(({ makeServer }) => {
        makeServer();
      });
    }
  }, []);

  return null;
}
