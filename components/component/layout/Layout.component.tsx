import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
}
export const LayOutComponent: FC<ILayout> = ({ children }) => {
  return (
    <>
      <LayOut>{children}</LayOut>
    </>
  );
};

const LayOut = styled.div`
  width: 85%;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
