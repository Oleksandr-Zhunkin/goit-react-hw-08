import { useDispatch, useSelector } from "react-redux";
import s from "../SearchBox/SearchBox.module.scss";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilterValue } from "../../redux/filters/slice";

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
