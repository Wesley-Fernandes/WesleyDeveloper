import React from "react";

interface props {
  href: string;
}
export function Thumbnail({ href }: props) {
  return (
    <figure>
      <img src={href} alt="thumbnail" className="rounded-sm" />
    </figure>
  );
}
