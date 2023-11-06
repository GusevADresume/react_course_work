import React from "react";
import { useState } from "react";
import { AES } from "crypto-js";

function CartForm({ onChange }) {
  const [phone, setPhone] = useState("");
  const [addres, setAddres] = useState("");
  const [agree, setAgree] = useState(false);

  const handleChangePhone = (e) => setPhone({ value: e.target.value });

  const handleChangeAddres = (e) => setAddres({ value: e.target.value });

  const handleSetAgree = () => setAgree(true);

  const handlePostForm = (e) => {
    e.preventDefault();
    if (agree && addres["value"] && phone["value"]) {
      const custonerData = {
        phone: AES.encrypt(phone["value"], "secret key 123").toString(),
        addres: AES.encrypt(addres["value"], "secret key 123").toString(),
      };
      onChange(custonerData);
    }
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <br></br>
            <input
              onChange={handleChangePhone}
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Ваш Телефон"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <br></br>
            <input
              onChange={handleChangeAddres}
              type="text"
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
            />
          </div>
          <div className="form-group form-check">
            <input
              onClick={handleSetAgree}
              type="checkbox"
              className="form-check-input"
              id="agreement"
            />
            <label htmlFor="agreement" className="form-check-label">
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={handlePostForm}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}

export { CartForm };
