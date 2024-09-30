import "./App.css";
import Navbar from "./Componnents/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginReg from "./Pages/LoginReg";
import Footer from "./Componnents/Footer/Footer";
import men_panner from "../src/Assets/banner_mens.png";
import women_panner from "../src/Assets/banner_women.png";
import kids_panner from "../src/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_panner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_panner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_panner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginReg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
