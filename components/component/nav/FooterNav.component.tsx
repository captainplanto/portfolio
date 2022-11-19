import { FC, ReactNode } from "react";
import styled from "styled-components";
interface IItem {
  icon?: string | ReactNode;
  action?: () => void;
  name?: string | ReactNode;
}
interface IFooterNav {
  navItems?: IItem[];
  navIcons?: IItem[];
}
export const FooterNavComponent: FC<IFooterNav> = ({
  navItems,
  navIcons,
  ...props
}) => {
  return (
    <Container>
      <div className="nav_items">
        {navItems && navItems.length > 0 ? (
          navItems.map(({ action, name }, index) => (
            <div key={index} onClick={() => (action ? action() : "")} >
              <div>{name}</div>
            </div>
          ))
        ) : (
          <h1>No Items</h1>
        )}
      </div>

      <div className="nav_icons">
        {navIcons && navIcons.length > 0 ? (
          navIcons.map(({ action, icon }, index) => (
            <div key={index} onClick={() => (action ? action() : "")}>
              <div>{icon}</div>
            </div>
          ))
        ) : (
          <h1>No Items</h1>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;

  .nav_items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 8fr;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 2.9fr;
    }
    @media screen and (max-width: 500px) {
      display: block;
      div {
        padding-bottom: 1rem;
        text-align: center;
      }
    }
  }

  .nav_icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr 1fr 1fr;
      place-items: center;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
