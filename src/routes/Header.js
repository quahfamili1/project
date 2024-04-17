import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>HDB app</h1>
      <nav>
        <Link to="/homepage">Homepage</Link> | <Link to="/result">Result</Link>{" "}
        | <Link to="/trend">Trends</Link>| <Link to="/aboutus">About-us</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Header;
