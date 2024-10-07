import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVAIL_LANG, LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/searchGpt";
import { useSelector } from "react-redux";
import { addChangelanguage } from "../utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  const handleSarchToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handleChangeLang = (e) => {
    dispatch(addChangelanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img alt="logo" src={LOGO} className="w-44" />
      </div>
      {user && (
        <div className="flex">
          {showGptSearch && (
            <div>
              <select
                className=" m-2 py-2 px-4 rounded-lg bg-gray-900 text-white border-0"
                onClick={handleChangeLang}
              >
                {AVAIL_LANG.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          <div>
            <button
              className="bg-purple-800 m-2 py-2 px-4 rounded-lg text-white"
              onClick={handleSarchToggle}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div>
            <button
              className=" text-white m-2  py-2 px-1"
              onClick={handleSignOutUser}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
