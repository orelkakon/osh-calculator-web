import React from 'react';
import HomePage from "./components/homepage/index"
import Details from "./components/details/index"
import Dairy from "./components/dairy/index"
import Inventory from "./components/inventory/index"
import Menu from './components/homepage/bottom-bar/index'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <HomePage />
        } />
        <Route path="/dairy" element={
          <Dairy />
        } />
        <Route path="/inventory" element={
          <Inventory />
        } />
        <Route path="/details" element={
          <Details />
        } />
      </Routes>
      <Menu />
    </>
  );
}

export default App;
