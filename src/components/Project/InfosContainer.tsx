import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export function InfosContainer({ children }: props) {
  return <footer>{children}</footer>;
}
