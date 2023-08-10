import React from "react";

// styles
import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";

// components
import Carousel from "../Carousel";
import Button from "../Button";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  font-weight: 600;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  width: 80%;
  font-weight: 400;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
`;

const SubTextLight = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  width: 80%;
  font-weight: 400;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          {" "}
          <Carousel />{" "}
        </Box>
        <Box>
          <Title>Welcome To The Weirdos Club.</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="Join Our Discord" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
