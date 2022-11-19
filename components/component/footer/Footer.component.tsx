import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Router from "next/router";
import { logoWhite } from "../../../constants/const";
import { FooterNavComponent } from "../nav/FooterNav.component";
import { toggleModal } from "../../../redux/features/portfolio/portfolio.slice";
import { useAppDispatch } from "../../../redux/hook";

export const FooterComponent = () => {
  const color: string = "white";
  const link = "captainplanto";
  const dispatch = useAppDispatch();
  const navItems = [
    {
      name: <Image src={logoWhite} objectFit="cover" width={50} />,
    },
    {
      name: "HOME",
      action: () => Router.push("/"),
    },
    {
      name: "PORTFOLIO",
      action: () => Router.push("/portfolio"),
    },
    {
      name: "CONTACT ME",
      action: () => dispatch(toggleModal(true)),
    },
  ];

  const navIcons = [
    {
      icon: <BsGithub color={color} />,
      action: () => Router.push(`https://github.com/${link}`),
    },
    {
      icon: <BsLinkedin color={color} />,
      action: () =>
        Router.push("https://www.linkedin.com/in/awoniyi-anthony-32084b187/"),
    },

    {
      icon: <BsTwitter color={color} />,
      action: () => Router.push(`https://twitter.com/${link}`),
    },
  ];

  return (
    <Container>
      <FooterNavComponent navItems={navItems} navIcons={navIcons} />
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--main-greyish-dark-blue);
  color: var(--main-white);
  padding: 1rem 0 1rem 0;
  margin-top: 12rem;
`;
