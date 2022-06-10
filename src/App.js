import './App.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemCount stock={5} />
    </div>
  );
}

export default App;
