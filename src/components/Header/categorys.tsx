import { BringToFront, SendToBack } from "lucide-react";
import React from "react";

export function Categorys() {
  return (
    <ul className="flex flex-col py-2 gap-3">
      <li className="border border-dashed rounded-md flex py-2 px-2 justify-between">
        <SendToBack className="text-black dark:text-white" strokeWidth={1}/>
        <span className="font-medium text-black dark:text-white">BACK-END</span>
      </li>
      <li className="border border-dashed rounded-md flex py-2 px-2 justify-between">
        <BringToFront className="text-black dark:text-white" strokeWidth={1}/>
        <span className="font-medium text-black dark:text-white">
          FRONT-END
        </span>
      </li>
    </ul>
  );
}
