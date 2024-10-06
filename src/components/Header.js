import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img alt="logo" src={LOGO} className="w-44" />
      </div>
      {user && (
        <div>
          <button
            className="bg-black text-white p-1 border-2 rounded-lg hover:bg-slate-400 mt-4"
            onClick={handleSignOutUser}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
