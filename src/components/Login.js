import React, { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  const toggleSignUpBtn = () => {
    setSignUp(!signUp);
  };

  console.log(signUp);

  return (
    <div className="relative">
      <div className="relative">
        <img
          alt="logo"
          src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-44 absolute bg-gradient-to-b from-black left-40"
        />
        <img
          className=""
          alt="background image"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        />
      </div>

      <div className="absolute bg-black m-auto top-1/4 left-[32rem] flex bg-black/70 text-white flex-col w-96">
        <h6 className="text-3xl font-bold m-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h6>
        <div className="flex flex-col">
          {signUp && (
            <input
              name="fullname"
              placeholder="Full Name"
              className="m-4 p-4"
            />
          )}
          <input name="email" placeholder="Email" className="m-4 p-4" />
          <input name="password" placeholder="Password" className="m-4 p-4" />
          <button className="bg-red-700  m-4 p-4">
            {signUp ? "Sign Up" : "Sign In"}
          </button>
        </div>

        <p className="m-4 cursor-pointer" onClick={() => toggleSignUpBtn()}>
          {signUp ? "Already user ? Sign In" : "New to netflix ? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
