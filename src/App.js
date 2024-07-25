import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiContext } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/home-page';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import { Cards } from './components/cards';
import { Footer } from './components/footer';
import { AboutProduct } from './components/about-product';
import { Registr } from './components/register';
function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [basket, setBasket] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);
  console.log(basket);
  return (
    <div className="App">
      <ApiContext.Provider value={{data,setCategory,category,setBasket,basket,isModalOpen,setIsModalOpen}}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path='/cards' element={<Cards/>} />
            <Route path='/product/:id' element={<AboutProduct/>}/>
            <Route path='/register' element={<Registr/>} />
          </Routes>
        </Router>
      </ApiContext.Provider>
    </div>
  );
}


export default App;
