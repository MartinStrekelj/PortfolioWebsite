import { Container, Hero, HeroBody, Subtitle, Title } from "bloomer";
import React from "react";
import CR_img from "./cr_img.svg";
import "./Rework.css";

interface Props {
  CTA: () => void;
}

const Rework = ({ CTA }: Props) => {
  return (
    <Hero isSize="large">
      <HeroBody>
        <Container className="containerZ" hasTextAlign="centered">
          <img className="rework__image" src={CR_img} alt="rework"></img>
          <Title isSize={1}>This page was last updated in Avgust 2020</Title>
          <Title>and is currenty under rework.</Title>
          <Subtitle>
            If you wish to see old legacy page{" "} 
            <span onClick={() => CTA()} className="rework__cta">
              click here!
            </span>
          </Subtitle>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default Rework;
