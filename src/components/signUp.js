import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // You can add your registration logic here
    console.log(`Signing up with username: ${username}, email: ${email}, and password: ${password}`);
  };

  return (
    <div className="w-1/4 mx-auto mt-8 my-12 h-2/4 border-s-violet-300">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <div className="mb-4 flex flex-col">
        <label className="block text-gray-600 font-semibold mb-2 ">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleSignup}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
