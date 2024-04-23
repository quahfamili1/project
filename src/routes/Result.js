import BubbleButton from "../components/BubbleButton";
import Dropbox from "../components/Dropbox";
import AveragePrice from "../pages/AveragePrice";
import FilterContext from "../context/FilterContext";
import { useContext, useState } from "react";
import "./Result.css";

function Result() {
  const context = useContext(FilterContext);
  // const arr = Array.from(context.filters);
  // console.log(arr);
  const [filterOn, setFilterOn] = useState(false);
  const toggleFilter = () => {
    if (!filterOn) {
      setFilterOn(true);
    } else setFilterOn(false);
  };

  return (
    <>
      <div class="checkbox-wrapper-8">
        <input
          class="tgl tgl-skewed"
          id="cb3-8"
          type="checkbox"
          onChange={toggleFilter}
        />
        <label
          class="tgl-btn"
          data-tg-off="Filter"
          data-tg-on="OFF"
          for="cb3-8"
        ></label>
      </div>
      {filterOn && <Dropbox />}
      <br></br>
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
