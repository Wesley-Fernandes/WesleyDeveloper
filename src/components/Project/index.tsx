import React from "react";
import { Button } from "../ui/button";
import { Earth, Github } from "lucide-react";
import { Tech } from "./Tech";
import { ButtonsContainer } from "./ButtonsContainer";
import { InfosContainer } from "./InfosContainer";
import { Title } from "./Title";
import { Thumbnail } from "./Thumbnail";
import { Techs } from "./Techs";
import { Actions } from "./Actions";
import { Container } from "./Container";

export default function Project() {
  return (
    <Container>
      <Thumbnail href="https://s3-alpha.figma.com/hub/file/1484544190/8d693e1f-483e-4db3-89b5-fbf34b973ce7-cover.png" />
      <InfosContainer>
        <Title title="Portifolio" />
        <hr className="py-1" />
        <Actions>
          <Techs>
            {Array.from({ length: 3 }).map((_, i) => (
              <Tech title="Typescript" key={String(i)} />
            ))}
          </Techs>
          <ButtonsContainer>
            <Button size="icon" variant="outline" title="Github">
              <Github />
            </Button>

            <Button size="icon" variant="outline" title="Website">
              <Earth />
            </Button>
          </ButtonsContainer>
        </Actions>
      </InfosContainer>
    </Container>
  );
}
