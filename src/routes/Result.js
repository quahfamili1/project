import BubbleButton from "../components/BubbleButton";
import AveragePrice from "../pages/AveragePrice";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

function Result() {
  const context = useContext(FilterContext);
  // const arr = Array.from(context.filters);
  // console.log(arr);
  const handleData = () => {
    //handle data value to put it in button
  };

  return (
    <>
      <div>This is the result page</div>
      {context.filters.map((i, index) => {
        // const data = index + 1 + ":" + i.town;
        // return <h1></h1>;
        return <BubbleButton index={index} data={i.town} />;
      })}

      <AveragePrice selected={context.selected} />
    </>
  );
}
export default Result;
