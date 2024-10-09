import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

interface LoadMoreProps {
  changePage: () => void,
}


const LoadMoreBtn: React.FC<LoadMoreProps> = ({ changePage }) => {
  return (
    <button className={css.btnLoadMore} onClick={changePage}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;