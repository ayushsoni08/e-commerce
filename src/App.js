import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/men' element={<ShopCategory category="men" />} />
          <Route exact path='/women' element={<ShopCategory category="women" />} />
          <Route exact path='/kids' element={<ShopCategory category="kids" />} />
          <Route exact path='/product' element={<Product />}>
            <Route exact path=':productId' element={<Product />} />
          </Route>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
