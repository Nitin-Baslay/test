import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} exact></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
