import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import getPhotos from "../../Api";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchImg, setSearchImg] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgForModal, setImgForModal] = useState({});


  useEffect(() => {
    if (searchImg === "") {
      return;
    }
    async function getRequest(searchImg, page) {
      try {
        setLoading(true);
        setError(false);

        const respons = await getPhotos(searchImg, page);
        if (respons.data.total_pages === 0) {
          toast.error(
            "There is not images matched your search. Please, try again.", { position: 'top-right',}
          );
        }
        setTotalPages(respons.data.total_pages);
        setImages((prev) => [...prev, ...respons.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getRequest(searchImg, page);
  }, [searchImg, page]);

  const imgOfSearch = (img) => setSearchImg(img);

  const imgModal = (src, likes, altDescription, description) =>
    setImgForModal({ src, likes, altDescription, description });

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (searchImg) => {
    imgOfSearch(searchImg);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery
          items={images}
          openModal={openModal}
          imgModal={imgModal}
        />
      )}

      {loading && <Loader />}
      <Toaster />
      {error && <ErrorMessage />}

      {images.length > 0 && !loading && <LoadMoreBtn changePage={loadMore} />}
      {modalIsOpen && (
        <ImageModal
          imgForModal={imgForModal}
          onCloseModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}
