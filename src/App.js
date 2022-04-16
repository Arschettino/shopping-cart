import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemPage from './components/ItemPage'
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const NavSpacer = styled.div`
    height: 80px;;
    width: 100%;
`;


function App() {

  const [cartView, setCartView] = useState(0);
  const [myCart, setMyCart] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  let params = useParams();

  let showCart = <Cart cartClick={handleCartClick} show={cartView} items={shopItems.filter((element, index) => myCart[index])} />
  useEffect(() => {
    async function getStore() {
      let response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
      let data = await response.json();
      setShopItems(data.data);
      let empty = new Array(data.data.length).fill(0);
      setMyCart(empty);
    }
    getStore();

  }, []);

  function addToCart(id) {
    setMyCart((state) => {
      let updated = [...state];
      updated[id] += 1;
      return updated;
    });
  }

  function getStatus(id) {
    if (myCart[id]) return true;
    return false;
  }


  function handleCartClick(event) {
    setCartView((state) => state === 0 ? 1 : 0)
  }

  function getItem(id) {
    return shopItems[id];
  }

  return (
    <BrowserRouter>
      {cartView ? showCart : null}
      <NavBar cartClick={handleCartClick} count={myCart.filter((item) => item!==0).length}/>
      <NavSpacer />
      <Routes>
        <Route path="/" element={<Home items={shopItems} />} />
        <Route path="shop" element={<Shop items={shopItems} />} />
        <Route path="/shop/:id" element={<ItemPage getItem={getItem} cartAdd={addToCart} getStatus={getStatus} />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
