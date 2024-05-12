"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "username":
        setUser({ ...user, username: e.target.value });
        break;
      case "email":
        setUser({ ...user, email: e.target.value });
        break;
      case "password":
        setUser({ ...user, password: e.target.value });
        break;
    }
  };

  const handleSignup = () => {};

  return (
    <div className="text-xl text-center text-blue">
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        className=""
        type="text"
        value={user.username}
        onChange={handleChange}
        placeholder="username"
      />
      <br />
      <label htmlFor="email">email: </label>
      <input
        id="email"
        className=""
        type="text"
        value={user.email}
        onChange={handleChange}
        placeholder="email"
      />
      <br />
      <label htmlFor="email">email: </label>
      <input
        id="password"
        className=""
        type="password"
        value={user.password}
        onChange={handleChange}
        placeholder="password"
      />
      <br />
      <button onClick={handleSignup}>Sign up for free</button>
    </div>
  );
}
