import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import "./BubbleButton.css";

const BubbleButton = ({ index, data}) => {
  const context = useContext(FilterContext);
  const i = index + 1;

  function onClick() {
    context.setSelected(index);
    console.log(context.selected);
    console.log(data);
  }

  let data2 =data
  data == "" ? data2 = "All" : data2 = data;

  return (
    <div className="bubble-button" role="button" tabIndex={0} onClick={onClick}>
      {i}: {data2}
    </div>
  );
};

export default BubbleButton;
