import { createContext } from "react";
const FilterContext = createContext();

export function ProductProvider({ children }) {
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
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}

export default FilterContext;
