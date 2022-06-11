import './App.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import ItemStore from './components/ItemStore';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemStore />
      <ItemCount stock={5} />
    </div>
  );
}

export default App;
