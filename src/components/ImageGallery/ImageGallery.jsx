import ImageCard from "../ImageCard/ImageCard";
import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery({
  items,
  openModal,
  imgModal,
}) {
  return (
    <ul className={css.list}>
      {items.map(
        ({
          likes,
          alt_description,
          description,
          id,
          urls: { regular, small },
        }) => {
          return (
            <li key={id} >
              <ImageCard
                likes={likes}
                altDescription={alt_description}
                imgSmall={small}
                imgRegular={regular}
                description={description}
                onOpenModal={openModal}
                imgModal={imgModal}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
