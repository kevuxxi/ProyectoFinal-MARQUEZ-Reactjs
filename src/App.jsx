import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cartprovider } from './contex/cartcontex';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Cartprovider>
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </div>
      </Cartprovider>
    </BrowserRouter>
  );
}

export default App;
