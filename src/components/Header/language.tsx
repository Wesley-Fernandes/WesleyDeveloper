import Image from "next/image";
import React from "react";

interface props {
  href: string;
  title: string;
}
export function Language({ href, title }: props) {
  return (
    <li className="py-2 flex justify-between px-2 border border-dashed rounded-md">
      <Image src={href} alt="logo" width={30} height={30} />
      <span>{title}</span>
    </li>
  );
}
