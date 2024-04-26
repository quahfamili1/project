import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Homepage from "./routes/Homepage";
import Result from "./routes/Result";
import Trend from "./routes/Trend";
import Aboutus from "./routes/Aboutus";
import { FilterProvider } from "./context/FilterContext";
import { useEffect } from "react";

function App() {
  const DefaultPage = () => <p>Nothing to see here!</p>;

  useEffect(() => {
    document.title = "HDB Finder"
 }, []);

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
