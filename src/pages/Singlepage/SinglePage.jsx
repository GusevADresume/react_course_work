import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGoodRequest } from "../../redux/Actions/actionCreators";
import { useEffect } from "react";
import { OrderParametr } from "./OrderParametr";
import { PTable } from "./PTable";
import { GoodPhoto } from "./GoodPhoto";
import { SingleGoodLoader } from "../../components/Loaders/SingleGoodLoader";

function SinglePage() {
  const { items, loading, error } = useSelector((state) => state.singleGood);
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error != null) {
      dispatch(getGoodRequest(param.id));
    }
  }, [error]);

  useEffect(() => {
    dispatch(getGoodRequest(param.id));
  }, []);

  return (
    <>
      <section className="catalog-item">
        {items && loading && (
          <div>
            <SingleGoodLoader />
          </div>
        )}
        <h2 className="text-center">{items.title}</h2>
        <div className="row-single">
          <GoodPhoto photo={items.images} />
          <div className="col-7">
            <PTable singleGoods={items} />
            <OrderParametr
              id={param.id}
              title={items.title}
              price={items.price}
              sizes={items.sizes}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export { SinglePage };
