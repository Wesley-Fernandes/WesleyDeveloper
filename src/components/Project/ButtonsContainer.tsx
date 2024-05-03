import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export function ButtonsContainer({ children }: props) {
  return <div className="flex justify-end gap-2">{children}</div>;
}
