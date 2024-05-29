import React from "react";
import RacesStyled from "./races.styled";

const Races = () => {
  return (
    <RacesStyled.Container>
      <h1 id="Races" style={{ color: "#9395d3", fontSize: "3rem" }}>
        {" "}
        Races
      </h1>
      <p style={{ fontStyle: "italic" }}>
        [This may contain spoilers, read by your own risk...]
      </p>
      <div>
        <p style={{ fontStyle: "italic" }}>
          Coming soon. We are working on it...
        </p>
      </div>
    </RacesStyled.Container>
  );
};

export default Races;
