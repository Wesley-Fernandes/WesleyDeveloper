import React from "react";
import { Button } from "../ui/button";
import { BookCopy, FolderGit2, MailPlus, Menu } from "lucide-react";
import Navlist from "./Navlist";

export default function Navbar() {
  const shadow =
    "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  return (
    <footer
      className={`mt-2 flex flex-col border px-4 py-2 rounded-lg ${shadow}`}
    >
      <div className="flex gap-2 w-full justify-between">
        <Button variant="outline" size={"icon"}>
          <BookCopy />
        </Button>
        <Button variant="outline" size={"icon"}>
          <FolderGit2 />
        </Button>
        <Button variant="outline" size={"icon"}>
          <MailPlus />
        </Button>
        <Navlist>
          <Button variant="outline" size={"icon"}>
            <Menu />
          </Button>
        </Navlist>
      </div>
    </footer>
  );
}
