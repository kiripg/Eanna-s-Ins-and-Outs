import React from "react";
import eanna from '../../assets/eanna.jpg'
import ReligionStyled from "./religion.styled";

const Religion = () => {
  return (
    <>
    <ReligionStyled.Container>
      <h1 id="Religion" style={{color: '#9395d3', fontSize: '3rem', textAlign: 'right'}}>Religion</h1>
      <p style={{ fontStyle: "italic", textAlign: 'right' }}>
        [This may contain spoilers, read by your own risk...]
      </p>

      <ReligionStyled.Content>

        <div><ReligionStyled.Pic src={eanna} alt="Eanna's decoration" /></div>
        <div>
            <p>Eanna is the Goddess of all Arunia. In every country, she is worshipped in one way or another, 
                with great differences in the practices within the same religion. There are no known 
                inhabitants of the world who worship other gods, but that doesn't mean they can't exist.<br/>
                Eanna is considered a chaotic and capricious goddess who imposes her will despite the intricacies 
                of the world. Although she does not manifest physically, she intervenes, and her interventions can 
                be clearly identified by mortals.</p>
            <p>In reality, Eanna is a representation of the writers of this story. We are Eanna and we shape the 
                world according to our ambition and will, which can either improve the lives of the characters or... 
                destroy them.</p>

      </div>
      </ReligionStyled.Content>
      </ReligionStyled.Container>
    </>
  );
};

export default Religion;
