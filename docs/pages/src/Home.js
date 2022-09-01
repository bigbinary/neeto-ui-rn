/* @flow */
/* eslint-disable import/no-commonjs */

import * as React from "react";
import { styled } from "linaria/react";
import { Link, Header } from "component-docs/components";

import color from "color";
import GooglePlayIcon from "../../components/google-play-icon";
import IphoneIcon from "../../components/iphone-icon";
import Content from "./components/Content";
// import GithubIcon from "../../components/github-icon";

const data = [
  {
    color: "#4557F8",
    name: "neetoInvoice",
    image: "apps/neetoInvoice-1.png",
    android: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
    ios: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
  },
  {
    color: "#4557F8",
    name: "neetoInvoice",
    image: "apps/neetoInvoice-2.png",
    android: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
    ios: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
  },
  {
    color: "#4557F8",
    name: "neetoInvoice",
    image: "apps/neetoInvoice-3.png",
    android: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
    ios: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
  },
  {
    color: "#4557F8",
    name: "neetoInvoice",
    image: "apps/neetoInvoice-4.png",
    android: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
    ios: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
  },
  {
    color: "#4557F8",
    name: "neetoInvoice",
    image: "apps/neetoInvoice-5.png",
    android: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
    ios: "https://apps.apple.com/in/app/aceinvoice/id1457618272",
  },
];

export default class Home extends React.Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header logo="images/neeto.svg" />
        <Content>
          <h1>
            neetoUI RN is the component library that drives the experience in all the{" "}
            <Highlighted target="_blank" href="https://neeto.com/">
              neeto
            </Highlighted>{" "}
            react native apps built at{" "}
            <Highlighted target="_blank" href="https://www.bigbinary.com/">
              BigBinary
            </Highlighted>{" "}
          </h1>
          <Buttons>
            <Button className="primary" as={Link} to="getting-started">
              Get started
            </Button>
            <Button
              href="https://github.com/bigbinary/neeto-ui-rn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Buttons>
          <Gallery>
            {data.map(item => {
              const tintColor = color(item.color).isLight()
                ? "#000000"
                : "#FFFFFF";
              return (
                <div key={item.image}>
                  <ImageContainer>
                    <Image src={item.image} alt="" />
                    <Info style={{ backgroundColor: item.color }}>
                      <AppName
                        style={{
                          color: tintColor,
                        }}
                      >
                        {item.name}
                      </AppName>
                      <BadgeContainer>
                        <a
                          href={item.android || null}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            item.android ? "anchor-active" : "anchor-inactive"
                          }
                        >
                          <GooglePlayIcon color={tintColor} />
                        </a>
                        <Separation />
                        <a
                          href={item.ios || null}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            item.ios ? "anchor-active" : "anchor-inactive"
                          }
                        >
                          <IphoneIcon color={tintColor} />
                        </a>
                      </BadgeContainer>
                    </Info>
                  </ImageContainer>
                </div>
              );
            })}
          </Gallery>
        </Content>
      </Container>
    );
  }
}

const primaryColor = "#4557F8";
const restingShadow = "0 1px 3px rgba(0, 0, 0, 0.12)";

const Highlighted = styled.a`
  color: ${primaryColor};

  &:hover,
  &:focus,
  &:active {
    color: ${primaryColor};
  }
`;

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px -8px;
  min-width: 0;
`;

const Button = styled.a`
  appearance: none;
  margin: 8px;
  min-width: 120px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;

  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.24);
  color: ${primaryColor};

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(98, 0, 238, 0.08);
    color: ${primaryColor};
  }

  &.primary {
    box-shadow: ${restingShadow};
    background-color: ${primaryColor};
    border-color: ${primaryColor};
    color: #fff;

    &:hover,
    &:focus,
    &:active {
      background-color: ${primaryColor};
      color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.24);
    }
  }
`;

const AppName = styled.h3`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 12px;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 0;
  margin: 32px -16px;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const Info = styled.div`
  height: 96px;
  padding: 12px;
  transform: translateY(0);
  transition: 150ms;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  display: block;
  max-width: 280px;

`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding-left: 3px;
`;

const Separation = styled.div`
  margin: 0 10px;
`;
