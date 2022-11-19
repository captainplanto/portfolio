import { FC } from "react";
import { Image } from "@nextui-org/react";
import styled from "styled-components";
import Link from "next/link";
import { IProp } from "../../types/types";
import Fade from "react-reveal/Fade";
export const StackComponent: FC<IProp> = ({ icons, ...props }) => {
  return (
    <Section id="stack-id">
      <p className="title">TECH STACKS</p>
      <Container>
        {icons && icons.length > 0 ? (
          icons.map(({ id, icon, slug, title }, index) => (
            <Link href={`${slug}`} target="_blank" key={id}>
              <Fade left>
                <Image
                  src={icon}
                  width={80}
                  height={80}
                  objectFit="contain"
                  className="image"
                  alt={title}
                  autoResize={true}
                />
              </Fade>
            </Link>
          ))
        ) : (
          <h6>No Icons Found.</h6>
        )}
      </Container>
    </Section>
  );
};
const Section = styled.section`
.title{
 font-size: 2rem;
 margin-top:8rem;
  color: var(--main-dark-blue);
  line-height: 5rem;
  font-weight:600;
  letter-spacing: 1rem !important;
  text-align:center;
}
`;

const Container = styled.div`
  display: grid;
  margin-top: 4rem;
  margin-bottom: 8rem;
  place-content: center;
  grid-template-columns: repeat(7, 1fr);
  gap: 2rem;

  .image {
    filter: grayscale(100%);
    cursor: pointer;

    :hover {
      filter: blur(2px);
      transition: filter 0.4s ease-in;
    }
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
