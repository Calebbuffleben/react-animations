import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/LoginSlice";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleLogin = () => {

        if (!username || !password) {
            setErrors('The user name or password are incorrect!');
        }

        const user = { username, password };
        dispatch(login(user));
    }

    return (
        <div>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors && <p>{errors}</p>}
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors && <p>{errors}</p>}
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginForm;