"use client";

import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react";
import { Github, Chrome } from 'lucide-react';
import toast from 'react-hot-toast';
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";

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
  const {data: session} = useSession();
  const router = useRouter();

  console.log(session);

  useEffect(() => {
    if(session) router.push('/');
  }, [router, session])

  const loginHandler = async () => {
    try {
      await signIn();
      router.push('/')
      toast.success('Welcome back to Power King')
    } catch (e) {
      console.log('error:', e);
      toast.error("Something wen't wrong")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signUp(formData);
      if (user) {
        toast.success('Success. Please sign in');
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    } finally {
      setFormData(formData);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 max-w-lg mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <p>OR</p>
          <div className="flex items-center">
            <Github onClick={loginHandler} className="mr-3 text-4xl cursor-pointer" />
            <Chrome className="text-4xl ml-3 cursor-pointer" />
          </div>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm text-black"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm text-black"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min. 6 characters)"
            minLength={6}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full sm:text-sm text-black"
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
        <button onClick={loginHandler} className="text-blue-600 underline">Login</button>
      </div>
    </div>
  );
};

export default Auth;
