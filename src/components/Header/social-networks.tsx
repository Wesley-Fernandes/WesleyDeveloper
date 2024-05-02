import React from "react";
import { Themer } from "../Theme/change-theme";
import { Button } from "../ui/button";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import Navlist from "../Navbar/Navlist";

export default function SocialNetworks() {
  return (
    <ul className="flex justify-center gap-2 py-2">
      <li>
        <Themer />
      </li>
      <li>
        <Button type="button" variant="outline" size="icon">
          <Github />
        </Button>
      </li>
      <li>
        <Button type="button" variant="outline" size="icon">
          <Linkedin />
        </Button>
      </li>
      <li>
        <Button type="button" variant="outline" size="icon">
          <Instagram />
        </Button>
      </li>
      <li>
        <Navlist>
          <Button variant="outline" size={"icon"}>
            <Menu />
          </Button>
        </Navlist>
      </li>
    </ul>
  );
}
