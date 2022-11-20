import styled from "styled-components";
import { content } from "../../../constants/const";
import Fade from "react-reveal/Fade";
import { ButttonComponent } from "../../common/Button.component";

export const ContentHeader = () => {
  const handleScrollTo = () => {
    const anchor = document.querySelector("#about_id");
    anchor.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fade top>
      <Container>
        <p className="content">{content}</p>
        <ButttonComponent outline onClick={handleScrollTo}>
          ABOUT ME
        </ButttonComponent>
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  width: 30%;
  position: absolute;
  bottom: 0;
  background-color: var(--main-white-blur);
  font-size: 3rem;
  font-weight: 600;
  color: var(--main-dark-blue);
  .content {
    text-align: left;
    line-height: 1.3;
  }
  @media screen and (max-width: 820px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    position: static;
    width: 99%;
    font-size: 2rem;
    p {
      padding-top: 1rem;
    }
  }
`;
