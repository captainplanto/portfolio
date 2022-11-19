import { about, aboutMeImage } from "../../../constants/const";
import { PortFolioCardComponent } from "../../cards/PortfolioCard.component";

export const AboutComponent = () => {
  return (
    <div id="about_id">
      <PortFolioCardComponent
        image={aboutMeImage}
        title="About Me"
        description={about}
        buttonText="View Portfolio"
        showPadding={false}
      />
    </div>
  );
};
