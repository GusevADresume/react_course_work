import React from "react";
import { useState, useEffect } from "react";
import { CartHead } from "./CartHead";
import { CartBody } from "./CartBody";
import { Cartfooter } from "./Cartfooter";
import { CartForm } from "./CartForm";
import {
  changeCartState,
  postOrderSuccess,
} from "../../redux/Actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import {
  postOrderRequest,
  postOrderFailure,
} from "../../redux/Actions/actionCreators";
import { CartLoader } from "../../components/Loaders/CartLoader";
import { CartModal } from "../../components/CartModal/CartModal";
import { CartSuccess } from "../../components/CartSuccess/CartSuccess";

function Cart() {
  const [goodsList, setList] = useState([]);
  const [orderSucces, setSucces] = useState(false);
  const [summ, setSumm] = useState(0);
  const { items, loading, error, status } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(postOrderFailure(null));
  };

  const getOrderItems = () => {
    let result = [];
    for (let i = 0; i < goodsList.length; i++) {
      result.push({
        id: goodsList[i]["id"],
        price: goodsList[i]["price"],
        count: goodsList[i]["count"],
      });
    }
    return result;
  };

  const sendOrder = (custonerData) => {
    const order = {
      owner: {
        phone: custonerData.phone,
        address: custonerData.addres,
      },
      items: getOrderItems(),
    };
    dispatch(postOrderRequest(order));
  };

  function summCalc() {
    let summ = 0;
    for (let i = 0; i < goodsList.length; i++) {
      summ += goodsList[i].price * goodsList[i].count;
    }

    setSumm(summ);
  }

  const handleDellgoods = (e) => {
    const editCart = goodsList;
    editCart.splice(e.target.id, 1);
    localStorage.setItem("cart", JSON.stringify(editCart));
    setList(editCart);
    dispatch(changeCartState(JSON.parse(localStorage.getItem("cart"))));
    summCalc();
  };

  useEffect(() => {
    if (status == 204) {
      dispatch(changeCartState(JSON.parse(localStorage.getItem("cart"))));
      setList([]);
      localStorage.setItem("cart", JSON.stringify([]));
      dispatch(changeCartState([]));
      setSucces(true);
      setTimeout(() => {
        dispatch(postOrderSuccess(null));
        setSucces(false);
      }, 2000);
    }
  }, [status]);

  useEffect(() => {
    summCalc();
  }, [goodsList]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart")) != null) {
      setList(JSON.parse(localStorage.getItem("cart")));
      summCalc();
    }
  }, []);

  return (
    <>
      {loading && <CartLoader />}
      {error != null ? <CartModal onChange={handleCloseModal} /> : ""}
      {orderSucces == true ? <CartSuccess /> : ""}
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <CartHead />
          <tbody>
            <CartBody goods={goodsList} onChange={handleDellgoods} />
            <Cartfooter summ={summ} />
          </tbody>
        </table>
      </section>
      <CartForm onChange={sendOrder} />
    </>
  );
}

export { Cart };
