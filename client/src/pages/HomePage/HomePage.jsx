import "./HomePage.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"Homepage " + theme}>
      <h1>Home page</h1>
      <img src="https://i.gifer.com/39Cg.gif" alt="deadline"/>
      <p>Deadline is coming!</p>
      <hr />
    </div>
  );
}

export default HomePage;