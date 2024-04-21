import { createContext, useState } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  
  const [filters, setFilters] = useState([]);
  const [results, setResults] = useState([]);
  const [blockChosen, setBlockChosen]  = useState("")
  const [streetNameChosen, setStreetNameChosen]  = useState("")
  const [resultsAddressChosen, setResultsAddressChosen]  = useState("")

  const context = {
    filters,
    results,
    blockChosen,
    streetNameChosen,
    resultsAddressChosen,
    setFilters,
    setResults,
    setBlockChosen,
    setStreetNameChosen,
    setResultsAddressChosen,
  };

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
