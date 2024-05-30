"use client";
import React, { useState } from "react";
import { Github, Chrome } from 'lucide-react';

const defaultInput = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setFormData(defaultInput);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 max-w-lg mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <p>OR</p>
          <div className="flex items-center">
            <Github className="mr-3 text-4xl cursor-pointer" />
            <Chrome className="text-4xl ml-3 cursor-pointer" />
          </div>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min. 6 characters)"
            minLength={6}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-600 underline">Login</button>
      </div>
    </section>
  );
};

export default Auth;
