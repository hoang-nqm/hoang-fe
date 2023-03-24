import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const user = {
    fullname: "Minh Hoang",
    dob: "2000-05-04",
    email: "hoang.nqm45@gmail.com",
    phone: "0356449764",
  };
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((email === "hoang.nqm45@gmail.com") & (password === "123456")) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/editpage");
    } else {
      toast.error("Email or password is incorrect ", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h5 className="heading">Login</h5>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              placeholder="example@kyanon.digital"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
              placeholder="******"
            />
          </div>
          <div className="button-group">
            <div className="show-password">
              {" "}
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={handleShowPassword}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
            <button type="submit" className="button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
