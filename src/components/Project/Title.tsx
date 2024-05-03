import React from "react";

interface props {
  title: string;
}
export function Title({ title }: props) {
  return <span className="font-medium">{title}</span>;
}
