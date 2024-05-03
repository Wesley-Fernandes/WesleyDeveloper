import type { ReactNode } from "react";
interface props {
  children: ReactNode;
}
export function Actions({ children }: props) {
  return <div className="flex items-center gap-0.5">{children}</div>;
}
