import toast from "react-hot-toast";
import { FormEvent } from "react";
import css from '../SearchBar/SearchBar.module.css'

interface SearchBarProps {
  onSubmit: (searchImg:string) => void,
}


const SearchBar:React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;    
  const inputElement = form.elements.namedItem("search") as HTMLInputElement;
    const formValue = inputElement.value.trim(); 

    if (formValue === "") {
      return toast.error("Please, specify your request.", { position: 'top-right',});
          }
    onSubmit(formValue);

    form.reset();
  };

  return (
      <header className={css.header} >
        <form onSubmit={handleSubmit}  className={css.form} >
          <input className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.btn} type="submit">Search</button>
        </form>
      </header>
    
  )
}

export default SearchBar;
