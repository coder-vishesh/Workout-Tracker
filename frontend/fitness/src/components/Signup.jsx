import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const signupData = { email, password, fName, lName };
    fetch("http://localhost:1234/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          handleNavigate();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            required
          ></input>
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <button type="submit">Sign up</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
