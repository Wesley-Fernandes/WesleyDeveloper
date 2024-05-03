import React from "react";

interface props {
  title: string;
}
export function Tech({ title }: props) {
  return (
    <span className="text-xs border text-zinc-300 border-zinc-500 bg-zinc-700 p-1 rounded-2xl shadow-sm shadow-primary/20">
      {title}
    </span>
  );
}
