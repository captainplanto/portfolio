import { Modal, Button } from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { toggleModal } from "../../redux/features/portfolio/portfolio.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { ButttonComponent } from "./Button.component";

interface IModal {
  children: ReactNode;
}
export const ModalComponent: FC<IModal> = ({ children, ...props }) => {
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeHandler = () => dispatch(toggleModal(false));
  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={closeHandler}
      >
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <ButttonComponent onClick={closeHandler} outline={true}>
            SUBMIT
          </ButttonComponent>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
