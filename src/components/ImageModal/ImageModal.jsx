import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css'


Modal.setAppElement("#root");

export default function ImageModal({
  imgForModal,
  onCloseModal,
  modalIsOpen,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        imgForModal={imgForModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img src={imgForModal.src} alt={imgForModal.altDescription} />

        <div >
          <p>{imgForModal.description}</p>
          <p>Likes : {imgForModal.likes}</p>
        </div>
        <button className={css.btn} onClick={onCloseModal}>X</button>
      </Modal>
    </>
  );
}