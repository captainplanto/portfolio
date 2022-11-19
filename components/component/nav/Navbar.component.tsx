import { Navbar, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { logo } from "../../../constants/const";
import { items } from "../../../contents/navbar";
import { toggleModal } from "../../../redux/features/portfolio/portfolio.slice";
import { useAppDispatch } from "../../../redux/hook";

export const NavBarComponent = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    setCurrentTab(id);
    if (currentTab === 1) {
      Router.push(`/`);
    } else if (currentTab === 2) {
      Router.push(`/portfolio`);
    } else if (currentTab === 3) {
      const anchor = document.querySelector("#stack-id");
      anchor.scrollIntoView({ behavior: "smooth" });
    } else if (currentTab === 4) {
      dispatch(toggleModal(true));
    } else {
      return;
    }
  };

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
          {items.map(({ id, name }) => (
            <div key={id}>
              <Navbar.Link
                // style={currentTab === id ? secondaryColor : mainColor}
                // href="#"
                isActive={currentTab === id ? true : false}
                onClick={() => handleClick(id)}
              >
                {name}
              </Navbar.Link>
            </div>
          ))}
        </Navbar.Content>

        <Navbar.Collapse>
          {items.map(({ id, name }) => (
            <Navbar.CollapseItem key={id}>
              <Link
                color="inherit"
                onClick={() => handleClick(id)}
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

const mainColor = {
  color: "var(--main-dark-blue)",
};
const secondaryColor = {
  color: "var(--main-white)",
};
