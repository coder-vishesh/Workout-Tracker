import React from "react";
import { useState, useEffect } from "react";

function Profile() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    setName(storedFullName);
  }, []);

  return (
    <>
      <div className="">
        <h1>Welcome {name} </h1>
      </div>
    </>
  );
}

export default Profile;
