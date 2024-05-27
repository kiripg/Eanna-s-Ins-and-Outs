import React from "react";
import WrittersComponentStyled from "./writtersComponent.styled";

export interface WrittersComponentProps {
        name: string;
        description: string;
}

const WrittersComponent = (props: WrittersComponentProps) => {
  return (
    
      <WrittersComponentStyled.Container>
        <WrittersComponentStyled.Title>{props.name}</WrittersComponentStyled.Title>
        <WrittersComponentStyled.Text>{props.description}</WrittersComponentStyled.Text>
      </WrittersComponentStyled.Container>
    
  );
};

export default WrittersComponent;
