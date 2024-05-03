import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export function Techs({ children }: props) {
  return <div className="flex flex-1 flex-wrap gap-1">{children}</div>;
}
