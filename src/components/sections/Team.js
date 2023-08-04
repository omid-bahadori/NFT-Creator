import React from "react";

// styles
import styled from "styled-components";

// components
import ConfettiComponents from "../ConfettiComponents";

// images
import img1 from "../../../public/favicon.svg";
import img2 from "../../assets/Nfts/bighead-5.svg";
import img3 from "../../assets/Nfts/bighead-8.svg";

const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 12px;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  z-index: 5;
  backdrop-filter: blur(4px);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
    margin: 0 auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section>
      <ConfettiComponents />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="Omid" position="Developer" />
        <MemberComponent img={img2} name="Moeen" position="Devops" />
        <MemberComponent img={img3} name="Saeed" position="Developer" />
      </Container>
    </Section>
  );
};

export default Team;
