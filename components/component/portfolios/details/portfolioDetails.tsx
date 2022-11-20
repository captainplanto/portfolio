import { FC } from "react";
import styled from "styled-components";
import { IContents} from "../../../../types/types";
import { PortFolioDetailsCardComponent } from "../../../cards/PortFolioDetailsCard.component";

export const PortFolioDetails: FC<IContents> = ({ projects, ...props }) => {
  const { id, images, title, url, subtitle, description, background } = projects;
  if (projects) {
    return (
      <Container key={id}>
        <PortFolioDetailsCardComponent
          id={id}
          imageOne={images.imageOne}
          imageTwo={images.imageTwo}
          imageThree={images.imageThree}
          title={title}
          subtitle={subtitle}
          snippet={description}
          background={background}
          color="var(--main-cyan)"
          url={url}
        />
      </Container>
    );
  }
  return (
    <h6>
      No project-details to show. Please include a project and try again later
    </h6>
  );
};

const Container = styled.div``;
