import type { ReactNode } from "react";
interface props {
  children: ReactNode;
}
export function Container({ children }: props) {
  const shadow =
    "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  return (
    <header
      className={`bgup px-4 mr-3 md:mr-0 mt-2 md:mt-0 py-4 border h-fit rounded-md flex items-center flex-col gap-2 w-full ${shadow} md:min-w-72 md:w-96 mr-4 bg-primary-foreground`}>
      {children}
    </header>
  );
}
