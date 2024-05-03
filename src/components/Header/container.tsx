import type { ReactNode } from "react";
interface props {
  children: ReactNode;
}
export function Container({ children }: props) {
  return (
    <header className="bgup px-4 md:mr-0 mt-2 md:mt-0 py-4 border h-fit rounded-md flex items-center flex-col gap-2 w-full shadowblocks md:min-w-72 md:w-96 mr-4 bg-primary-foreground">
      {children}
    </header>
  );
}
