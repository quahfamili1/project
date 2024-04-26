import Dropbox from "../components/Dropbox";
import flags from "../assets/flats.jpg";

function Homepage() {
  return (
    <div>
      <img
        src={flags}
        alt=""
        style={{
          width: "100%",
          height: "300px",
          "object-fit": "cover",
          "object-position": "bottom",
        }}
      />
      <br></br>
      <Dropbox />
    </div>
  );
}
export default Homepage;
