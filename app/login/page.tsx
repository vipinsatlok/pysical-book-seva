"use client";

import Button from "@/componants/common/Button";
import InputBox from "@/componants/common/InputBox";
import axios from "axios";
import React, { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if not email or password
    if (!(email || password)) return;

    const { data } = await axios.post("/api/login", { email, password });

    console.log({data});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div>
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <Button text="Login" />
        </div>
      </form>
    </div>
  );
}
