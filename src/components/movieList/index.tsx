import React, { ReactNode } from "react";

export default function MovieList({ children }: { children: ReactNode }) {
  return <div className="flex gap-2">{children}</div>;
}
