"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState(""); // Change 'username' to 'email'
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Use 'email' instead of 'username'
    });

    if (response.ok) {
      const data = await response.json();
      const { access_token } = data;

      // Store the access token in local storage or any state management solution
      localStorage.setItem("access_token", access_token);

      router.push("/modules/Home");
      toast.success("Login Success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-sky-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
