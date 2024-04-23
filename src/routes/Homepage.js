import Dropbox from "../components/Dropbox";
import flags from "../assets/flats.png";

function Homepage() {
<<<<<<< Updated upstream
  return <div>This is the homepage
    <br></br>
    <Dropbox/>
  </div>;
=======
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
>>>>>>> Stashed changes
}
export default Homepage;
