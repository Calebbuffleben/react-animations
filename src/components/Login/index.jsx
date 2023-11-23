import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/LoginSlice";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({ 
        username: '', 
        password: ''
    })
    const [errors, setErrors] = useState('');

    const handleLogin = () => {
        if (!user.username || !user.password) {
            setErrors('The user name or password are incorrect!');
        }

        const userData = { user: user.username, password: user.password };
        dispatch(login(userData));
    }

    return (
        <div>
            <label>
                Username:
                <input type="text" value={user.username} onChange={(e) => setUser({ username: e.target.value })} />
                {errors && <p>{errors}</p>}
            </label>
            <label>
                Password:
                <input type="password" value={user.password} onChange={(e) => setUser({ password: e.target.value })} />
                {errors && <p>{errors}</p>}
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginForm;