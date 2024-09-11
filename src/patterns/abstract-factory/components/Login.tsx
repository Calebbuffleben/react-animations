import { ChangeEvent, cloneElement, ReactElement, useState } from "react";
import { ApiServiceFactory } from "../service/abstractFatory/ApiServiceFactory";
import { AbstractFactory } from "./abstractFactory/AbstractFactory";

interface LoginProps {
    componentFactory: AbstractFactory;
    apiService: ApiServiceFactory;
}

const Login = ({ componentFactory, apiServiceFactory }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const success = await apiServiceFactory.login(username, password);
        setMessage(success ? 'Login successful!' : 'Login failed.');
    }
    
    return (
        <div>
            <h2>Login</h2>
            <div>
                {/* Render text input using factory */}
                {cloneElement(componentFactory.createTextInput() as ReactElement, {
                    value: username,
                    onChange: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
                })}
                {/* Render text input using factory */}
                {cloneElement(componentFactory.createTextInput() as ReactElement, {
                    type: password,
                    placeholder: 'Enter your password',
                    value: password,
                    onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
                })}
                {/* Render button using factory */}
                {cloneElement(componentFactory.createButton() as ReactElement, {
                    onClick: handleLogin
                })}
            </div>
            <p>{message}</p>
        </div>
    );
}

export default Login;