import { IIcon, IProject } from "../../../../types/types";
import { ContactComponent } from "../../../common/Contact.component";
import { SectionComponent } from "../../../common/Section.component";
import { StackComponent } from "../../../common/Stack.component";
import { FooterComponent } from "../../footer/Footer.component";
import { LayOutComponent } from "../../layout/Layout.component";
import { NavBarComponent } from "../../nav/Navbar.component";
import { PortFolio } from "./PortFolio";

export const PortfolioIndex = ({
  projects,
  icons,
  ...props
}: {
  projects: IProject[];
  icons: IIcon[];
}) => {
  return (
    <>
      <NavBarComponent />
      <LayOutComponent>
        <PortFolio projects={projects} />
        <SectionComponent title="Available for hybrid Jobs" />
        <StackComponent icons={icons} />
      </LayOutComponent>
      <ContactComponent />
      <FooterComponent />
    </>
  );
};
