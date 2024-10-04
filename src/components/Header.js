import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User deleted");
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error ocurre
        navigate("/error");
        console.log("error occured");
        // ...
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-44"
        />
      </div>
      <div>
        <button
          className="bg-black text-white p-1 border-2 rounded-lg hover:bg-slate-400 mt-4"
          onClick={handleSignOutUser}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
