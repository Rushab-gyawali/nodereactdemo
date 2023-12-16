import "./App.css";
import Header from "./components/Header";
import OrderPage from "./components/Order";
import ProductsPage from "./components/Products";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/order" element={<OrderPage />} />
          <Route path="/product" element={<ProductsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
