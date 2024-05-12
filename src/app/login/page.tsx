"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    console.log("handleChange ---> ", e.target);
    switch (e.target.id) {
      case "username":
        setUser({ ...user, username: e.target.value });
        break;
      case "password":
        setUser({ ...user, password: e.target.value });
        break;
    }
  };

  const handleLogin = () => {};

  return (
    <div className="flex h-dvh justify-center items-center">
      <div className="bg-slate-100 bg-opacity-25 w-[30%] rounded-lg flex flex-col p-4 justify-center">
        <label className="block py-2" htmlFor="username">
          Username:{" "}
        </label>
        <input
          id="username"
          className="p-2 rounded-lg focus:outline-none focus:border-sky-500 text-black"
          type="text"
          value={user.username}
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <label className="block" htmlFor="password">
          Password:{" "}
        </label>
        <input
          id="password"
          className="p-2 rounded-lg focus:outline-none focus:border-sky-500 text-black"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <button
          className="bg-blue-100 text-black m-2 w-20 rounded-lg p-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
