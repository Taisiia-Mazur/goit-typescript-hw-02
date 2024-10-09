import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import getPhotos from "../../Api";
import {IPhoto, TypeForApi } from "../../generalTypes";



export default function App() {
  const [images, setImages] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchImg, setSearchImg] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imgForModal, setImgForModal] = useState<IPhoto>({ id: "",
  description: "",
  alt_description: "",
  urls: {
    regular: "",
    small: "",
  },
  likes: 0,});
  

  useEffect(() => {
    if (searchImg === "") {
      return;
    }
    async function getRequest(searchImg:string, page:number) {
      try {
        setLoading(true);
        setError(false);

        const respons = await getPhotos<TypeForApi>(searchImg, page);
        if (respons.total_pages === 0) {
          toast.error(
            "There is not images matched your search. Please, try again.", { position: 'top-right',}
          );
        }
        setTotalPages(respons.total_pages);
        setImages((prev) => [...prev, ...respons.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getRequest(searchImg, page);
  }, [searchImg, page]);

  const imgOfSearch = (img:string) => setSearchImg(img);

  const imgModal = (imgForModal:IPhoto) =>
    setImgForModal(imgForModal);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (searchImg:string) => {
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
