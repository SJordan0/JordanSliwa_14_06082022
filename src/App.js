import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import EmployeeList from './Pages/Employee-list';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/employees-list" element={<EmployeeList />} />
      </Routes>
  );
}

export default App;
