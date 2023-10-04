import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can add your authentication logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="w-1/4 mx-auto mt-8 my-12  vh-50">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Enter your username"
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
        onClick={handleLogin}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
