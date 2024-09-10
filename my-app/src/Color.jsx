import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("");
  const [user, setUser] = useState({
    name: "Awanit",
    age: 20,
    web: "www.google.com",
    salary: 20000
  });

  function updateAge() {
    setUser((e) => ({
      ...e,
      age: e.age + 1,
    }));
  }
  function updateSalary() {
    setUser((e) => ({
      ...e,
      salary: e.salary + 1000,
    }));
  }

  function updateSalary1() {
    setUser((e) => ({
      ...e,
      salary: e.salary - 1000,
    }));
  }

  return (
    <div>
      <div className="board" style={{ background: color }}></div>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <p>My Favorite color is: {color}</p>
      <br />
      <p>Username: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Website: {user.web}</p>
      <p>Salary: {user.salary}</p>
      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateSalary}>Increment Salary</button>
      <button onClick={updateSalary1}>Decrement Salary</button>
    </div>
  );
}

export default Color;



