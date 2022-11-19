import { metaContent, pageTitle, title } from "../../../constants/const";
import { SectionComponent } from "../../common/Section.component";
import { StackComponent } from "../../common/Stack.component";
import { AboutComponent } from "../about/About.component";
import { FooterComponent } from "../footer/Footer.component";
import { HeaderComponent } from "../header/Header.component";
import { LayOutComponent } from "../layout/Layout.component";
import { NavBarComponent } from "../nav/Navbar.component";
import Head from "next/head";
import { IIcon } from "../../../types/types";
import { ContactComponent } from "../../common/Contact.component";

export const HomeIndex = ({ icons }: { icons: IIcon[] }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaContent} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/captainkoder/image/upload/v1668103284/portfolio/Portfolio-image_cbrpej.png"
        />
      </Head>
      <NavBarComponent />
      <LayOutComponent>
        <HeaderComponent />
        <AboutComponent/>
        <StackComponent icons={icons} />
        <SectionComponent title={title} />
      </LayOutComponent>
      <ContactComponent />
      <FooterComponent />
    </>
  );
};
