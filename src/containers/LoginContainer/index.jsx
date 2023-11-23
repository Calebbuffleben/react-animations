import { useSelector } from "react-redux";
import LoginForm from "../../components/Login"

const LoginContainer = () => {
    const loggedInUser = useSelector((state) => state.userLogin.loggedInUser);

    return (
        <div>
      <h1>User Login Page</h1>
      {!loggedInUser ? (
        <LoginForm />
      ) : (
        <div>
            <h2>User Information</h2>
            <p>Username: {/*user.username*/}</p>
        </div>
      )}
    </div>
    )
};

export default LoginContainer;