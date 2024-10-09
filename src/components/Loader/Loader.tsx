import { RotatingLines } from 'react-loader-spinner'
import css from '../Loader/Loader.module.css'

export default function Loader() {
    return (
       <div className={css.loader}>
            <RotatingLines 
      visible={true}
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      />
       </div>
    )
};

