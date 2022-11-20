import router, { Router } from "next/router";
import { ButttonComponent } from "../common/Button.component";
import { FooterComponent } from "../component/footer/Footer.component";
import { LayOutComponent } from "../component/layout/Layout.component";
import { NavBarComponent } from "../component/nav/Navbar.component";

export const BlogComponent = () => {
  return (
    <>
      <NavBarComponent />
      <LayOutComponent>
        <div style={heading}>
          <h1>COMING SOON</h1>
          <ButttonComponent outline={true} link={`/`}>
            Back to Home
          </ButttonComponent>
        </div>
      </LayOutComponent>
    </>
  );
};

const heading: object = {
  position: "absolute",
  top: "50%",
  right: "0",
  left: "0",
  textAlign: "center",
};
