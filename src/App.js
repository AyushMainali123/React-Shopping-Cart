import React, { useEffect, useState, useReducer } from "react";
import * as Contentful from "contentful";
import "./App.css";
import Navbar from './components/Navbar'
import { Switch, Route } from "react-router-dom";
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import { cartContext } from "./context/CartContext";
import reducer from './context/reducer'

const initialState = {
  itemsInCart: [],
  quantity: 0,
  totalAmount: 0,
};


function App() {
  const [datas, setDatas] = useState([])
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const client = Contentful.createClient({
      space: "b6o1t5o9di7c",
      accessToken: "Yjx3_ilnt38wxCcPUbjKjpwT1y8qPMG8Wg-g9AhCzi8",
    });
    client
      .getEntries({ content_type: "mobilePhones" })
      .then((response) => {
        const filteredDatas = response.items.map(entry => {
          const {id} = entry.sys
          const { price, title } = entry.fields
          const imageTitle = entry.fields.image.fields.title
          const imageUrl = entry.fields.image.fields.file.url
          
          return {id, price, title, imageTitle, imageUrl}
        })
        setDatas(filteredDatas)
      });
  }, []);


  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Shop
              datas={datas}
            />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </cartContext.Provider>
  );
}

export default App;
