function formationLS(goodParam) {
  if (localStorage.getItem("cart") != null) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
      if (
        goodParam["id"] == cart[i]["id"] &&
        goodParam.size == cart[i]["size"]
      ) {
        cart[i]["count"] =
          cart[i]["count"] + goodParam.count > 10
            ? 10
            : cart[i]["count"] + goodParam.count;
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }
    }
    cart.push(goodParam);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.setItem("cart", JSON.stringify([goodParam]));
  }
}

export { formationLS };
