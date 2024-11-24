import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginHandle() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    const loginData = { email, password };
    fetch("http://localhost:1234", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          let fullName = data.userInfo.fName + " " + data.userInfo.lName;
          const token = data.token;
          localStorage.setItem("fullName", fullName);
          localStorage.setItem("token", token);
          console.log(data);
          const extractToken = localStorage.getItem("token");
          if (!extractToken) {
            return "no token found";
          } else {
            navigateTo("/profile");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log in</button>
          <button type="button" onClick={() => navigateTo("signup")}>
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginHandle;
