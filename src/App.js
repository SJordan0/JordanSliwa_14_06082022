import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import EmployeeList from './Pages/Employee-list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/employees-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
