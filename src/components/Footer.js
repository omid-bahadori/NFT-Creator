import React from "react";

// styles
import styled from "styled-components";

// components
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn";

const Section = styled.section`
  min-height: 70vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto 0;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://facebook.com" target="_blanck" rel="noopener">
              <Facebook />
            </a>
            <a href="https://facebook.com" target="_blanck" rel="noopener">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blanck" rel="noopener">
              <Twitter />
            </a>
            <a href="https://facebook.com" target="_blanck" rel="noopener">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>

          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by Omid Bahadori.
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
