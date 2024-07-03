import { useDispatch, useSelector } from "react-redux";
import s from "../SearchBox/SearchBox.module.scss";
import { changeFilterValue, selectNameFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilterValue(e.target.value))}
        placeholder="Enter contact name..."
      />
    </div>
  );
};
export default SearchBox;
