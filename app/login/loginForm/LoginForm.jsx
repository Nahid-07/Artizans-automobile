"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn("credentials", { email, password });
  };
  return (
    <div className="w-full md:w-1/2 h-full flex justify-center items-center p-6 md:p-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        >
          Login{" "}
        </button>
        <p className="text-center text-gray-600 mt-4">or Register with</p>
        <div className="flex justify-center mt-4 space-x-2">
          <button className=" bg-gray-300 rounded-full p-3 cursor-pointer">
            <FcGoogle />
          </button>
          <button className=" bg-gray-300 rounded-full p-3 cursor-pointer">
            <FaLinkedinIn className="text-blue-600" />
          </button>
          <button className=" bg-gray-300 rounded-full p-3 cursor-pointer">
            <FaFacebook className="text-blue-600" />
          </button>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Did't have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
