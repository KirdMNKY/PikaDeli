import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Navbar from './Navbar';

const Main = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          {/* <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default Main