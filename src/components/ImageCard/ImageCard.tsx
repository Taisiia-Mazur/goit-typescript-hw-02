import { IPhoto } from '../../generalTypes';
import css from '../ImageCard/ImageCard.module.css'

interface ImageCardProps {
  photoData: IPhoto;
  onOpenModal: () => void;
  imgModal: (imgModal: IPhoto) => void;
}


const ImageCard:React.FC<ImageCardProps> = ({ photoData, onOpenModal, imgModal, }) =>{
  const openModal = (photoData: IPhoto) => {
    imgModal(photoData);
    onOpenModal();
  };

  return (
    <div className={css.imgBox}>
      <img
        src={photoData.urls.small}
              alt={photoData.alt_description}
        onClick={() =>
          openModal(photoData)
        }
      />
    </div>
  );
}

export default ImageCard
