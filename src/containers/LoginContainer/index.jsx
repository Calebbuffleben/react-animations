import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Login"
import { logout } from "../../reducers/LoginSlice";

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