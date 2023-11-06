import React from "react";
import sprite from "../../assets/footer-sprite.png";

function Payment() {
  return (
    <div className="col">
      <section>
        <h5>Принимаем к оплате:</h5>
        <img src={sprite} className="sprite" alt="Visa MasterCard PayPall" />
      </section>
      <section>
        <div className="footer-copyright">
          2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
          Все права защищены.
          <br></br>
          Доставка по всей России!
        </div>
      </section>
    </div>
  );
}

export { Payment };
