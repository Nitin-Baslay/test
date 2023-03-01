import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [flip, setFlip] = useState(false);
  const data = [
    "red",
    "yellow",
    "black",
    "azure",
    "green",
    "pink",
    "violet",
    "pink",
    "gold",
    "olive",
    "mantis",
    "sky",
    "orange",
  ];
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };
  const dataHandler = () => {
    axios
      .get("http://65.0.134.149:2000/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Data not Found");
      });
  };
  const toggleHandler = () => {
    setFlip((prevalue) => !prevalue);
  };
  return (
    <div>
      <nav>
        <h2 className="head">Welcome User</h2>
        <button onClick={logoutHandler}>Log Out</button>
      </nav>
      <main>
        <button onClick={dataHandler}>Get Listings</button>
        <button onClick={toggleHandler} className="toggle">
          Toggle
        </button>
      </main>
      <div>
        <ul className={flip ? "toggler" : ""}>
          {data.map((ele) => {
            return <li className="list">{ele}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Home;
