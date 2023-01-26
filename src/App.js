// import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <header id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="로고" />
        </div>
      </header>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;
