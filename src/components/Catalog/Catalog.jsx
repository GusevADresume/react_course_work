import React from "react";
import { useState, useEffect } from "react";
import { CatalogList } from "./CatalogList";
import { useSelector, useDispatch } from "react-redux";
import { Categories } from "./Categories/Categories";
import { LoadButton } from "./LoadButton";
import {
  getCatalogRequest,
  changeSearchField,
  changeCategoryId,
} from "../../redux/Actions/actionCreators";
import { SearchString } from "../Search/SearchString";
import { CatalogLoader } from "../Loaders/CatalogLoader";

function Catalog({ search }) {
  const [buttonState, setButton] = useState(true);
  const { items, loading, error } = useSelector((state) => state.catalog);
  const { categoryId } = useSelector((state) => state.categoryId);
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [goods, setgoods] = useState([]);
  const [offset, setOffset] = useState(0);

  const getData = () =>
    dispatch(
      getCatalogRequest({
        category: categoryId,
        offset: offset,
        q: searchValue,
      })
    );

  useEffect(() => {
    if (!search) {
      dispatch(changeSearchField(""));
    }
  }, [search]);

  useEffect(() => {
    if (error != null) {
      setgoods([]);
      getData();
    }
  }, [error]);

  const hadleApplyCategory = (id) => {
    if (id != categoryId) {
      setButton(true);
      dispatch(changeCategoryId(id));
      setOffset(0);
      setgoods([]);
    }
  };

  useEffect(() => {
    getData();
    setgoods([]);
  }, [searchValue]);

  useEffect(() => {
    getData();
  }, [offset]);

  useEffect(() => {
    if (loading == false) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [loading]);

  useEffect(() => {
    getData();
  }, [categoryId]);

  useEffect(() => {
    if (items.length < 6) {
      setButton(false);
    }
    setgoods((prev) => [...prev, ...items]);
  }, [items]);

  useEffect(() => {
    setgoods([]);
    getData();
    return () => {
      dispatch(changeCategoryId(""));
    };
  }, []);

  const handleOffset = () => {
    if (items.length > 5) {
      setOffset(offset + 6);
    }
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {search == false ? "" : <SearchString />}
      <ul className="catalog-categories nav justify-content-center">
        <Categories onChange={hadleApplyCategory} />
      </ul>
      <CatalogList goods={goods} load={loading} />

      <LoadButton onChange={handleOffset} visible={buttonState} />
      {items && loading && (
        <div>
          <CatalogLoader />
        </div>
      )}
    </section>
  );
}

export { Catalog };
