import React, { useState } from "react";

// components
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";

// styles
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }
`;

const Accordion = ({ title, children }) => {
  const [collaps, setCollaps] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollaps(!collaps)}>
        <Name>
          {" "}
          <span> {title} </span>{" "}
        </Name>
        {collaps ? (
          <Indicator>
            {" "}
            <Minus />{" "}
          </Indicator>
        ) : (
          <Indicator>
            {" "}
            <Plus />{" "}
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collaps}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
