import React from 'react';
import HomePage from "./components/homepage/index"
import About from "./components/about/index"
import Dairy from "./components/dairy/index"
import Inventory from "./components/inventory/index"
import Menu from './components/homepage/bottom-bar/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HomePage />
        <Routes>

          <Route path="/" exact strict render={
            () => (
              <HomePage />
            )
          } />
          <Route path="/dairy" exact strict render={
            () => (
              <Dairy />
            )
          } />
          <Route path="/inventory" exact strict render={
            () => (
              <Inventory />
            )
          } />
          <Route path="/about" exact strict render={
            () => (
              <About />
            )
          } />
        </Routes>
        <Menu />
      </BrowserRouter>
    </>
  );
}

export default App;
