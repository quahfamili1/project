
import BubbleButton from "../components/BubbleButton";
import Dropbox from "../components/Dropbox";
import AveragePrice from "../pages/AveragePrice";

function Result() {
  const handleData = () => {
    //handle data value to put it in button
  };

  return (
    <>
      <div>This is the result page</div>
      <Dropbox/>
      <br></br>
      <BubbleButton value="data" />
      <br></br>
      <AveragePrice/>
    </>
  );
}
export default Result;
