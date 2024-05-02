import Image from "next/image";
import React from "react";
import { Container } from "./container";
import { Themer } from "../Theme/change-theme";
import SocialNetworks from "./social-networks";
import { Categorys } from "./categorys";
import Languages from "./languages";
import { Username } from "./username";

export default function Header() {
  return (
    <Container>
      <figure className="md:relative md:-top-32 rounded-md overflow-hidden border-4 h-fit w-44">
        <Image
          src="/profile.jpeg"
          alt="user image"
          width={300}
          height={300}
          priority
        />
      </figure>
      <div className="md:relative md:-top-32 md:-mb-32 h-fit w-full">
        <SocialNetworks />
        <Username />
        <Categorys />
        <Languages />
      </div>
    </Container>
  );
}
