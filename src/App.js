// import { useState } from "react";
import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Homepage from "./routes/Homepage";
import Result from "./routes/Result";
import Trend from "./routes/Trend";
import Aboutus from "./routes/Aboutus";
import AveragePrice from "./pages/AveragePrice";
import { FilterProvider } from "./context/FilterContext";
import { Bar } from 'react-chartjs-2';
import Table from './Table';

function App() {
  const DefaultPage = () => <p>Nothing to see here!</p>;

  return (
    <div className="App">
      <header className="App-header"></header>
      <FilterProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="result" element={<Result />}></Route>
            <Route path="trend/:block/:street_name" element={<Trend />}></Route>
            <Route path="aboutus" element={<Aboutus />}></Route>
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </div>
  );
}

export default App;
