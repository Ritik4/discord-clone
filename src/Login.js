import React from "react";
import "./Login.css";
import discord from "./img/discord-logo-855AEC93F1-seeklogo.com.png";
import { provider, auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={discord} alt="" />
      </div>

      <button onClick={signIn}>Sign in</button>
    </div>
  );
}

export default Login;
