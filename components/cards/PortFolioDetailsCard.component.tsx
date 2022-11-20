import { FC } from "react";
import styled from "styled-components";
import { IPortfolioDetailsCard } from "../../types/types";
import { Divider, Image } from "@nextui-org/react";
import { ButttonComponent } from "../common/Button.component";
import { SectionComponent } from "../common/Section.component";

export const PortFolioDetailsCardComponent: FC<IPortfolioDetailsCard> = ({
  id,
  imageOne,
  imageTwo,
  imageThree,
  title,
  subtitle,
  url,
  snippet,
  background,
  color,
  ...props
}) => {
  return (
    <Container color={color}>
      <div className="header_background">
        <Image
          src={imageOne}
          alt={`${title} image`}
          width={900}
          height={500}
          objectFit="cover"
          className="image-one"
        />
        <Image
          src={imageTwo}
          alt={`${title} image`}
          width={900}
          height={500}
          objectFit="cover"
          className="image-two"
        />
      </div>
      <div className="grid_project">
        <div className="title_snippet">
          <div>
            <Divider />
            <p className="title">{title}</p>
            <p className="snippet">{snippet}</p>
            <p className="subtitle">{subtitle}</p>
            <ButttonComponent outline={false} link={`${url}`}>
              Visit Repository
            </ButttonComponent>
            <Divider />
          </div>
        </div>

        <div className="project_background">
          <h1>Project Background</h1>
          <div className="container_p">
            <p>{background}</p>
          </div>

          <div className="static_preview">
            <h1>Static Preview</h1>
            <Image src={imageOne} alt={title} objectFit="cover" />
            <Image src={imageTwo} alt={title} objectFit="cover" />
            <Image src={imageThree} alt={title} objectFit="cover" />
          </div>
        </div>
      </div>
      <SectionComponent title="Let's bring your ideas into light" />
    </Container>
  );
};

const Container = styled.div<{ color: string }>`
  .header_background {
    display: flex;
    margin: 0 auto;
    gap: 2rem;
    background: ${(props) => (props.color ? props.color : "yellow")};
    padding: 4rem;
    margin-bottom: 8rem;
    @media screen and (max-width: 820px) {
      .nextui-c-iVzbCs-ibnpwlE-css {
        height: 100px;
      }

      padding: 1rem 4rem 1rem 4rem;
    }
  }
  .grid_project {
    display: grid;
    grid-template-columns: 6fr 7fr;
    .project_background {
      h1,
      p {
        margin-bottom: 2rem;
      }
      .container_p {
        width: 70%;
        font-size: 1.5rem;
        @media screen and (max-width: 820px) {
          width: 100%;
        }
      }
      @media screen and (max-width: 500px) {
        margin-top: 4rem;
      }
    }

    .title_snippet {
      display: grid;
      grid-template-columns: 8fr 4fr;
      .title {
        color: var(--main-dark-blue);
        font-size: 4rem;
      }
      .snippet {
        font-size: 1.5rem;
      }
      .subtitle {
        color: var(--main-cyan);
        font-weight: 700;
      }
      @media screen and (max-width: 500px) {
        display: block;
      }
    }
    .static_preview {
      margin-bottom: 8rem;
      img {
        margin-bottom: 4rem;
      }
      @media screen and (max-width: 500px) {
        margin-bottom: 2rem;
      }

      @media screen and (max-width: 820px) {
        .nextui-c-kbhVdb-iguHdYf-css {
          object-fit: cover;
        }
      }
    }
    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
// /<IPortfolioDetailsCard>
// background: ${(props) => (props.color ? props.color : "yellow")};
/*


   .image-one {
      position: absolute;
      top: 45%;
      left: 30%;
      transform: translate(-50%, -50%);
      z-index:1;
    }


*/
