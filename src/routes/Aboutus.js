import dev from "../assets/dev.jpg";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  const teamName = "Awesome Developers";
  const teamDescription =
    "We are a group of passionate students learning full-stack development.";

  const inspiringNote = "Together, we build dreams into code!";

  return (
    <div className={styles.aboutuscontainer}>
      <h1 className={styles.teamname}>{teamName}</h1>
      <img className={styles.teamimage} src={dev} alt="Team" />
      <p className={styles.teamdescription}>{teamDescription}</p>
      <p className={styles.inspiringnote}>{inspiringNote}</p>
    </div>
  );
};

export default Aboutus;
