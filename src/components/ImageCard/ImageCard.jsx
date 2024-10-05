import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({
  likes,
  altDescription,
  imgSmall,
  imgRegular,
  description,
  onOpenModal,
  imgModal,
}) {
  const openModal = (imgRegular, likes, altDescription, description) => {
    imgModal(imgRegular, likes, altDescription, description);
    onOpenModal();
  };

  return (
    <div className={css.imgBox}>
      <img
        src={imgSmall}
              alt={altDescription}
        onClick={() =>
          openModal(imgRegular, likes, altDescription, description)
        }
      />
    </div>
  );
}
