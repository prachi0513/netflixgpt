import React, { useState, useRef } from "react";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignUpBtn = () => {
    setSignUp(!signUp);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleFormSubmit = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              //console.log("error in update profile");
            });

          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Header />
        <img
          className=""
          alt="background image"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        />
      </div>

      <div className="absolute bg-black m-auto top-1/4 left-[32rem] flex bg-black/70 text-black flex-col w-96">
        <h6 className="text-3xl font-bold m-4 text-white">
          {signUp ? "Sign Up" : "Sign In"}
        </h6>
        <div className="flex flex-col">
          {signUp && (
            <input
              ref={fullName}
              name="fullname"
              placeholder="Full Name"
              className="m-4 p-4 rounded-lg"
            />
          )}
          <input
            name="email"
            placeholder="Email"
            className="m-4 p-4 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="m-4 p-4 rounded-lg"
            ref={password}
          />
          <p className="text-red-600 text-lg text-bold p-2 m-2">
            {errorMessage}
          </p>
          <button
            className="bg-red-700  m-4 p-4 text-white rounded-lg hover:bg-red-900"
            onClick={handleFormSubmit}
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
        </div>

        <p
          className="m-4 cursor-pointer text-white"
          onClick={() => toggleSignUpBtn()}
        >
          {signUp ? "Already user ? Sign In" : "New to netflix ? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
