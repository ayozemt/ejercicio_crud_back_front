import "./AboutPage.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

function AboutPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={"Homepage " + theme}>
      <h1>About page</h1>
      <h3>Lab by Ayoze Martin</h3>
      <p>
        This is a lab for the subject of Web Development. It is a simple
        application that allows you to create, edit and delete trips.
      </p>
      <p>
        It is made with React, Node.js, Express and MongoDB. It also uses
        Bootstrap for the styling.
      </p>
      <hr />
    </div>
  );
}

export default AboutPage;
