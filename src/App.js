// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Homepage from "./routes/Homepage";
import Result from "./routes/Result";
import Trend from "./routes/Trend";
import Aboutus from "./routes/Aboutus";
import AveragePrice from "./pages/AveragePrice";

function App() {
  const DefaultPage = () => <p>Nothing to see here!</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="Homepage" element={<Homepage />}></Route>
            <Route path="Result" element={<Result />}></Route>
            <Route path="Trend" element={<Trend />}></Route>
            <Route path="Aboutus" element={<Aboutus />}></Route>
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
      <AveragePrice />
    </div>
  );
}

export default App;
