import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../registration/Auth";
import { useState, useEffect } from "react";
import "./AuthDetails.css";

export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);
    function userSignOut() {
        signOut(auth)
            .then(() => console.log("success"))
            .catch((e) => console.log(e));
    }
    return (
        <div className="auth__details">
            {authUser ? (
                <div className="auth__description">
                    <p className="auth__status">{`Signed in as ${authUser.email}`}</p>
                    <button className="auth__button" onClick={userSignOut}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <p className="auth__status">Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
