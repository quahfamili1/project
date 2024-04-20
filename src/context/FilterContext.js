import { createContext, useState } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  
  const [filter, setFilter] = useState([]);
  const [results, setResults] = useState([]);

  const context = {
    filter,
    results,
    setFilter,
    setResults,
  };

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
