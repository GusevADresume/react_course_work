import React from "react";
import { useState, useEffect } from "react";
import { CategoriesList } from "./CategoriesList";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesRequest } from "../../../redux/Actions/actionCreators";
import { CategoriesLoader } from "../../Loaders/CategoriesLoader";

function Categories({ onChange }) {
  const [state, setState] = useState(" ");
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  useEffect(() => {
    if (error != null) {
      dispatch(getCategoriesRequest());
    }
  }, [error]);

  const handleChose = (e) => {
    setState(e.target.id);
    onChange(e.target.id);
  };
  return (
    <>
      {items.length == 0 && loading && (
        <div>
          <CategoriesLoader />
        </div>
      )}
      {items.map((element) => {
        return (
          <li
            onClick={handleChose}
            key={element.id}
            className="nav-item-categories"
          >
            <CategoriesList element={element} select={state} />
          </li>
        );
      })}
    </>
  );
}

export { Categories };
