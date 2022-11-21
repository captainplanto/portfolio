import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Divider, Image } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { ButttonComponent } from "../common/Button.component";
import { IPortfolioCard } from "../../types/types";

export const PortFolioCardComponent: FC<IPortfolioCard> = ({
  image,
  title,
  description,
  buttonText,
  color,
  showPadding,
  buttons,
  id,
  slug,
  ...props
}) => {
  const [size, setSize] = useState<number>(0);
  useEffect(() => {
    const findWidth = window.innerWidth;
    setSize(findWidth);
  }, []);

  const remainder = id % 2;
  //isEven
  if (remainder !== 1 || size < 900) {
    return (
      <Container>
        <Fade left>
          <div
            style={{
              backgroundColor: color,
              padding: showPadding ? "2rem" : "",
            }}
          >
            <Image
              objectFit="cover"
              src={image}
              width={500}
              height={500}
              alt="portfolio-image"
            />
          </div>
        </Fade>

        <div className="about_me">
          <Fade right>
            <Divider />
            <h1>{title.toUpperCase()}</h1>
            <p>{description}</p>
            <ButttonComponent
              outline={false}
              link={id ? `/portfolio/${slug}/${id}` : "/portfolio"}
              className="button"
            >
              {buttonText.toUpperCase()}
            </ButttonComponent>
            <Divider />
          </Fade>

          <div className="stack_grid">
            {buttons && buttons.length > 0
              ? buttons.map((button, index) => (
                  <ButttonComponent
                    outline={false}
                    className="stack_button"
                    key={index}
                  >
                    {button}
                  </ButttonComponent>
                ))
              : ""}
          </div>
        </div>
      </Container>
    );
  } else {
    //not even
    return (
      <Container>
        <div className="about_me">
          <Fade right>
            <Divider />
            <h1>{title.toUpperCase()}</h1>
            <p>{description}</p>
            <ButttonComponent
              outline={false}
              link={id ? `/portfolio/${slug}/${id}` : "/portfolio"}
              className="button"
            >
              {buttonText.toUpperCase()}
            </ButttonComponent>
            <Divider />
          </Fade>

          <div className="stack_grid">
            {buttons && buttons.length > 0
              ? buttons.map((button, index) => (
                  <ButttonComponent
                    outline={false}
                    className="stack_button"
                    key={index}
                  >
                    {button}
                  </ButttonComponent>
                ))
              : ""}
          </div>
        </div>

        <Fade left>
          <div
            style={{
              backgroundColor: color,
              padding: showPadding ? "2rem" : "",
            }}
          >
            <Image
              objectFit="cover"
              src={image}
              width={500}
              height={500}
              alt="portfolio-image"
            />
          </div>
        </Fade>
      </Container>
    );
  }
};
const Container = styled.div`
  margin-top: 15rem;
  margin-bottom: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  .about_me {
    width: 30%;
    h1 {
      margin-top: 4rem;
      color: var(--main-dark-blue);
    }
    p {
      color: var(--main-greyish-dark-blue);
    }
    .button {
      margin-bottom: 4rem;
    }
    .stack_grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 820px) {
    display: block;
    margin-top: 8rem;
    margin-bottom: 5rem;
    .about_me {
      width: 99%;
      text-align: center;
      h1 {
        margin-top: 1rem;
      }
    }
  }
  .stack_button {
    p {
      padding: 5px;
      letter-spacing: 0 !important;
    }
    border-radius: 5rem;
    margin: 0;
  }
`;

