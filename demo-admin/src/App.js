import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/products' element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
