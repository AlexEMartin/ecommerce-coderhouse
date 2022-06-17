import "./App.css";
import Navbar from "./components/Navbar";
import ItemCount from "./components/ItemCount";
import ItemStore from "./components/ItemStore";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<ItemStore />} />
          <Route path="/:productId" element={<ItemDetailContainer />} />
          <Route path="/contador" element={<ItemCount stock={5} />} />
      </Routes>
    </div>
  );
}

export default App;
