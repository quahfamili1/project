import BubbleButton from "../components/BubbleButton";
import AveragePrice from "../pages/AveragePrice";

function Result() {
  const handleData = () => {
    //handle data value to put it in button
  };

  return (
    <>
      <div>This is the result page</div>
      <BubbleButton value="data" />
      <AveragePrice/>
    </>
  );
}
export default Result;
