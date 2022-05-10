import React from "react";
import { 
    TextContainer,
    HeadingContainer,
    SkillListContainer
} from "../styles/TextContent.syles";

function TextContent() {
  return (
    <TextContainer>
      <HeadingContainer>Web Developer</HeadingContainer>
      <SkillListContainer>HTML  |  CSS  |  JavaScript  |  React</SkillListContainer>
    </TextContainer>
  );
}

export default TextContent;
