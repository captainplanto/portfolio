import { FC } from "react";
import styled from "styled-components";
import { IContent } from "../../../../types/types";
import { PortFolioCardComponent } from "../../../cards/PortfolioCard.component";
/*const showColor = (id: number) => {
    id === 1 ? "red" : id === 2 ? "green" : id === 3 ? "grey" : "black";
  };

*/

export const PortFolio: FC<IContent> = ({ projects, ...props }) => {
  return (
    <Container>
      {projects && projects.length > 0 ? (
        projects.map(
          ({ id, image, title, description, slug, stacks }, index) => (
            <PortFolioCardComponent
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              buttonText="View project"
              showPadding={true}
              color={
                id === 1
                  ? "var(--main-cyan)"
                  : id === 2
                  ? "var(--main-greyish-dark-blue)"
                  : id === 3
                  ? "var(--main-dark-blue)"
                  : id === 4
                  ? "var( --bright-red-error)"
                  : "black"
              }
              buttons={stacks}
              slug={slug}
            />
          )
        )
      ) : (
        <h6>
          No project to show. Please include a project and try again later
        </h6>
      )}
    </Container>
  );
};

const Container = styled.div``;
