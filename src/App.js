import "./App.css";
import Navbar from "./components/Navbar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import ItemCategoryContainer from "./components/ItemCategoryContainer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer />} />
          <Route path="/contador" element={<ItemCount stock={5} />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
