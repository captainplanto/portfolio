import { IIcon, IProject } from "../../../../types/types";
import { ContactComponent } from "../../../common/Contact.component";

import { StackComponent } from "../../../common/Stack.component";
import { FooterComponent } from "../../footer/Footer.component";
import { LayOutComponent } from "../../layout/Layout.component";
import { NavBarComponent } from "../../nav/Navbar.component";
import { PortFolioDetails } from "./portfolioDetails";

export const PortfolioDetailsIndex = ({
  projects,
  icons,
  ...props
}: {
  projects: IProject;
  icons: IIcon[];
}) => {
  return (
    <>
      <NavBarComponent />
      <LayOutComponent>
        <PortFolioDetails projects={projects} />
        <StackComponent icons={icons} />
      </LayOutComponent>
      <ContactComponent />

      <FooterComponent />
    </>
  );
};
