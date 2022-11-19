import { Divider } from "@nextui-org/react";
import { FC } from "react";
import styled from "styled-components";
import { toggleModal } from "../../redux/features/portfolio/portfolio.slice";
import { useAppDispatch } from "../../redux/hook";
import { ButttonComponent } from "./Button.component";

interface ISection {
  title: string;
}
export const SectionComponent: FC<ISection> = ({ title, ...props }) => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <p className="title">{title}</p>
      <Divider className="divider" />
      <ButttonComponent
        outline={false}
        onClick={() => dispatch(toggleModal(true))}
      >
        CONTACT ME
      </ButttonComponent>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  column-gap: 10rem;

  .title {
    color: var(--main-dark-blue);
    font-weight: 600;
    font-size: 3rem;
    text-align: left;
    line-height: 3rem;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1.4fr 0.4fr 1fr;
    column-gap: 1rem;
    margin-top: 8rem;
  }
  @media screen and (max-width: 500px) {
    display: block;
    .divider {
      display: none;
    }
    text-align: center;
    .title {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;
