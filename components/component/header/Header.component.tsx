import { Image } from "@nextui-org/react";
import styled from "styled-components";
import { banner } from "../../../constants/const";
import { ContentHeader } from "./Content.component";

export const HeaderComponent = () => {
  return (
    <>
      <Container>
        <Image src={banner} height="70vh" objectFit="cover" alt="banner"/>
        <ContentHeader />
      </Container>
    </>
  );
};
const Container = styled.div`
  position: relative;
`;
