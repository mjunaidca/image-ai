"use client";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement registration logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-md shadow-md w-2/6">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md mr-4"
              type="submit"
            >
              Register
            </button>
            <button
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
        <hr className="my-6" />
        <p className="text-center">
          Already have an account?{" "}
          <a className="text-gray-800 font-bold" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
