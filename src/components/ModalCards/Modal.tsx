import ButtonComponent from "../Button";
import { ModalStyled } from "./ModalStyled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalStyled>
          <ButtonComponent action={onClose}>Fechar</ButtonComponent>
          <span>{children}</span>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;
