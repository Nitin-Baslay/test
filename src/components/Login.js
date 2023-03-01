import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      alert("Password should be of minimum 8 characters");
      return;
    } else if (email === "sntuser@user" && password === "Snt@1234") {
      navigate("home");
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
  };
  return (
    <div>
      <h1>Machine Test</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type={"email"}
            placeholder="Enter Your e-mail"
            className="inp1"
            onChange={emailHandler}
          />
        </div>
        <input
          type={"password"}
          placeholder="Enter Password"
          className="inp2"
          min="8"
          onChange={passwordHandler}
        />
        <div>
          <div>
            <button type={"submit"}>Login</button>
          </div>
          <button>Register</button>
          <button className="forgot">Forgot Password</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
