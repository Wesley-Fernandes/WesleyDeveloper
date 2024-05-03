import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export function Container({ children }: props) {
  return <li className="border rounded shadowline p-2 col-span-1 animate__animated animate__fadeInRight">{children}</li>;
}
