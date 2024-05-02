import Image from "next/image";
import React from "react";
import { Language } from "./language";

export default function Languages() {
  const data = [
    { title: "Typescript", icon: "/langs/typescript.svg" },
    { title: "Javascript", icon: "/langs/javascript.svg" },
    { title: "Html 5", icon: "/langs/html5.svg" },
    { title: "Css 3", icon: "/langs/css3.svg" },
    { title: "Lua", icon: "/langs/lua.svg" },
    { title: "Php", icon: "/langs/php.svg" },
    { title: "Python", icon: "/langs/python.svg" },
    { title: "Taillwind", icon: "/langs/taillwind.svg" },
    { title: "Node Js", icon: "/langs/nodejs.svg" },
    { title: "React", icon: "/langs/react.svg" },
    { title: "Express", icon: "/langs/express.svg" },
    { title: "Mongo DB", icon: "/langs/mongodb.svg" },
    { title: "PostgreSql", icon: "/langs/postgresql.svg" },
    { title: "MySql", icon: "/langs/mysql.svg" },
    { title: "Github", icon: "/langs/github.svg" },
    { title: "Sass", icon: "/langs/sass.svg" },
  ];
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="border-2 border-primary h-3 w-3 rounded-full bg-blue-400" />
        <h2 className="py-1">Tecnologias</h2>
      </div>
      <ul className="flex flex-col gap-2 h-56 p-0.5 overflow-y-auto w-full">
        {data.map((i) => (
          <Language href={i.icon} title={i.title} key={i.title} />
        ))}
      </ul>
    </>
  );
}
