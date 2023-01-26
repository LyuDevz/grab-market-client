import "./style.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://d7720774-a34a-4a7e-864d-fcccd2fb48e1.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (err) {
        console.log("에러 발생 : ", err);
      });
  }, []);
  return (
    <main id="main">
      <header id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="로고" />
        </div>
      </header>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="배너1" width="100%" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div
                className="product-card"
                key="{number.toString()}"
                value={index}
              >
                <Link className="product-link" to={`/products/ ${index}`}>
                  <div>
                    <img
                      className="product-img"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt="아바타"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <footer id="footer"></footer>
      </div>
    </main>
  );
}

export default MainPage;
