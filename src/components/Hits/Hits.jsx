import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHitsRequest } from "../../redux/Actions/actionCreators";
import { CatalogList } from "../../components/Catalog/CatalogList";
import { HitsLoader } from "../Loaders/HitsLoader";

function Hits() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.hits);

  useEffect(() => {
    dispatch(getHitsRequest());
  }, []);

  useEffect(() => {
    if (error != null) {
      dispatch(getHitsRequest());
    }
  }, [error]);

  return (
    <>
      <h2 className="text-center">Хиты продаж!</h2>{" "}
      {items && loading && (
        <div>
          <HitsLoader />
        </div>
      )}
      {items.length > 0 ? (
        <>
          {" "}
          <section className="top-sales">
            {" "}
            <CatalogList goods={items} />
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export { Hits };
