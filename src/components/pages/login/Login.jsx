import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../registration/Auth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function login(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
                setError("Sorry, no account with that email");
            });
    }
    return (
        <div className="registration">
            <form action="" className="registration__form">
                <h2 className="registration__title">Log In</h2>
                <input
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="registration__input"
                />
                <input
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="registration__input"
                />
                <button onClick={login} className="registration__button">
                    Login
                </button>
                {error ? <p className="registration__error">{error}</p> : ""}
            </form>
        </div>
    );
};

export default Login;
