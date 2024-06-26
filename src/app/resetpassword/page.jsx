"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {toast,ToastContainer} from "react-toastify";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const restPasswordHandler = async () => {
    try {
      if (token.length > 0) {
        setLoading(true);
        await axios.put("/api/users/resetpassword", {
          token,
          newPassword,
          confirmNewPassword,
        });
        toast.success("Password changed successfully!");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <>
    <ToastContainer toastStyle={{ backgroundColor: "black" }} />    <div className="max-w-md mx-auto flex flex-col items-center justify-center min-h-screen py-2 px-4">
      {loading ? (
        "Processing"
      ) : (
        <>
          <h1 className="mb-6 font-bold text-3xl">Reset Password</h1>
          <hr />
          <form onSubmit={restPasswordHandler} className="flex flex-col w-full">
            <label htmlFor="password" className="mb-2">
              New Password
            </label>
            <input
              className="w-full p-2 border text-black border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
              type="password"
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
            <label htmlFor="confirmPassword" className="mb-2">
              Confirm Password
            </label>
            <input
              className="w-full p-2 border text-black border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
              type="password"
              id="confirmPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600">
              Reset Password
            </button>
          </form>
        </>
      )}
    </div>
    </>

  );
};

export default ResetPasswordPage;