import { IPhoto } from "../../generalTypes";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

interface ImageGallProps {
  items: IPhoto[];
  openModal: () => void;
  imgModal: (imgModal: IPhoto) => void;
}

const ImageGallery: React.FC<ImageGallProps> = ({
  items,
  openModal,
  imgModal,
}) => {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard
              photoData={item}
              onOpenModal={openModal}
              imgModal={imgModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
