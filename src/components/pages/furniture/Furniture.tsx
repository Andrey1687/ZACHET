import "./Furniture.css";
import Registration from "../../registration/Registration";
import Login from "../login/Login";
import AuthDetails from "../../auth/AuthDetails";

export const Furniture = () => {
    return (
        <div className="furniture">
            <div className="furniture__container">
                <Registration />
                <Login />
                <AuthDetails />
            </div>
        </div>
    );
};

export default Furniture;
