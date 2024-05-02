import type { ReactNode } from "react";
import Header from "../Header";
import Navbar from "../Navbar";

interface props {
  children: ReactNode;
}
export default function Layout({ children }: props) {
  /*
      <aside className="flex flex-col  h-full justify-center w-full sm:min-w-72 sm:w-96 mr-4">
        <Header />
      </aside>

  */
  return (
    <main className="bgd flex flex-col items-center min-h-screen px-6 py-2 gap-8 md:flex-row">
      <Header />
      {children}
    </main>
  );
}
