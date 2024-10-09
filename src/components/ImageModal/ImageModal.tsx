import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";
import { IPhoto } from "../../generalTypes";

Modal.setAppElement("#root");

interface ModalProps {
  imgForModal: IPhoto;
  onCloseModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ModalProps> = ({
  imgForModal,
  onCloseModal,
  modalIsOpen,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img src={imgForModal.urls.regular} alt={imgForModal.alt_description} />

        <div>
          <p>{imgForModal.description}</p>
          <p>Likes : {imgForModal.likes}</p>
        </div>
        <button className={css.btn} onClick={onCloseModal}>
          X
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
