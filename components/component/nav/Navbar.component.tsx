import { Navbar, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { logo } from "../../../constants/const";
import { toggleModal } from "../../../redux/features/portfolio/portfolio.slice";
import { useAppDispatch } from "../../../redux/hook";

export const NavBarComponent = () => {
  const items: {
    id: number;
    name: string;
    key: string;
    action: () => void;
  }[] = [
    {
      id: 1,
      name: "HOME",
      key: "Home",
      action: () => Router.push("/"),
    },
    {
      id: 2,
      key: "Portfolio",
      name: "PORTFOLIO",
      action: () => Router.push("/portfolio"),
    },
    {
      id: 3,
      name: "BLOG",
      key: "Blog",
      action: () => Router.push("/blog"),
    },
    {
      id: 4,
      name: "CONTACT ME",
      key: "Contact Me",
      action: () => dispatch(toggleModal(true)),
    },
  ];
  const [currentTab, setCurrentTab] = useState<number>(0);
  const dispatch = useAppDispatch();
  const handleClick = (index: number) => {
    localStorage.setItem("tab", JSON.stringify(index));
    setCurrentTab(index);
  };
  useEffect(() => {
    const tabIndex = localStorage.getItem("tab");
    const result = tabIndex ? JSON.parse(tabIndex) : "";
    setCurrentTab(result);
  }, []);
  return (
    <Container>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Image
            src={logo}
            alt="portfolio-logo"
            objectFit="cover"
            width={80}
            className="padding_mobile"
          />
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          hideIn="xs"
          variant="highlight-solid-rounded"
          activeColor="secondary"
        >
          {items.map(({ id, name, action, key }, index) => (
            <div key={id}>
              <Navbar.Link
             
                isActive={currentTab === index ? true : false}
                onClick={() => {
                  action && action();
                  handleClick(index);
                }}
              >
                {name}
              </Navbar.Link>
            </div>
          ))}
        </Navbar.Content>

        <Navbar.Collapse>
          {items.map(({ id, name, action }, index) => (
            <Navbar.CollapseItem key={id} style={{ paddingBottom: "2rem" }}>
              <Link
                color="inherit"
                onClick={() => {
                  action && action();
                  handleClick(index);
                }}
              >
                {name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  font-size: 1rem;
  cursor: pointer;
  .nextui-c-egxOLa {
    max-width: 88%;
    margin: 0 auto;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      max-width: 96%;
    }
  }
  .padding_mobile {
    @media screen and (max-width: 500px) {
      position: absolute;
      right: 0;
    }
  }
`;


