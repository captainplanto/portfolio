import { InputComponent } from "../component/about/Input.component";
import { ModalComponent } from "./Modal.component";

export const ContactComponent = () => {
  return (
    <div>
   
      <ModalComponent>
         <p>Contact Form</p>
        <InputComponent />
      </ModalComponent>
    </div>
  );
};
