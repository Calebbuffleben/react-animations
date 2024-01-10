import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/LoginSlice";

import LoginForm from "../../components/Login"

const LoginContainer = () => {
    const loggedInUser = useSelector((state) => state.userLogin.loggedInUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
    <div>
        <h1>User Login Page</h1>
        {!loggedInUser ? (
            <LoginForm />
        ) : (
        <div>
            <h2>User Information</h2>
            <p>Username: {loggedInUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
        )}
    </div>
    )
};

export default LoginContainer;