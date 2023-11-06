import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchField,
  changeSearchSuccess,
  changeSearchIconValue,
} from "../../redux/Actions/actionCreators";

function SearchString() {
  const dispatch = useDispatch();
  const { searchInput, searchValue } = useSelector((state) => state.search);
  const { searchIconValue } = useSelector((state) => state.searchIconValue);

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  useEffect(() => {
    if (searchIconValue.length > 0) {
      dispatch(changeSearchField(searchIconValue));
      dispatch(changeSearchIconValue(""));
    }

    return () => {
      dispatch(changeSearchField(""));
      dispatch(changeSearchSuccess(""));
    };
  }, []);

  return (
    <div>
      <input
        className="CatalogSearch"
        onChange={handleSearch}
        type="text"
        placeholder="Поиск"
        value={searchInput}
      />
    </div>
  );
}

export { SearchString };
