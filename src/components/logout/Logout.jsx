"use client"
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Logout() {
  const router = useRouter(); // Move useRouter call here

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      console.log("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={logout} className='text-yellow-400 text-xl ml-4'>
        Logout
      </button>
    </div>
  );
}

export default Logout;
