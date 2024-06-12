"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const adminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/users/adminApi", user);
      if (response.data.success) {
        router.push('/admin');
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-[20rem]'>
      <h1>{loading ? "Processing..." : "Sign In"}</h1>
      <input
        type="email"
        value={user.email}
        id='email'
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='Enter email'
        className='p-2 rounded-xl text-black'
      />
      <input
        type="password"
        value={user.password}
        id='password'
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='Enter Password'
        className='p-2 rounded-xl text-black'
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className='border p-4 rounded-xl text-xl mt-4'
        onClick={adminLogin}
        disabled={loading}
      >
        {loading ? "Processing..." : "Admin Login"}
      </button>
    </div>
  );
}

export default Page;
