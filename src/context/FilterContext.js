import { createContext } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  const setFilter = () => {};

  const setResult = () => {};

  const filter = [];
  const results = [];

  const context = {
    filter,
    results,
    setFilter,
    setResult,
  };

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
