import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1234/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setisAuthenticated(true);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);
  if (!isAuthenticated) {
    return <div>loading.......</div>;
  }
  return (
    <>
      <div className="">
        <h1>Welcome </h1>
      </div>
    </>
  );
}

export default Profile;
