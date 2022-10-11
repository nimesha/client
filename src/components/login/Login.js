import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../error/ErrorMessage"

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [errorMessage] = useState('')
    const navigate = useNavigate();

    const navigateToForgetPassword = () => {
        navigate('/forget-password');
    };
    const navigateToSignUp = () => {
        navigate('/sign-up');
    };

    const onLoginClick = async () => {
        alert('Not implemented');
    }

    return (
        <div className='container-auth'>
            <div className='wrap'>
                <h1>Login</h1>
                {errorMessage && <ErrorMessage message={errorMessage} />}
                <div className='input'>
                    <input
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        type="email" placeholder='someone@mail.com' ></input>
                </div>
                <div className='input'>
                    <input
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        type="password"></input>
                </div>
                <div className='action-container'>
                    <button
                        disabled={!emailValue || !passwordValue}
                        onClick={onLoginClick}
                        className='primary-btn btn'>Login</button>
                </div>
                <div className='btn-container'>
                    <button
                        onClick={navigateToForgetPassword}
                        className='btn secondary-btn btn-w-auto'>Forgot your password?</button>
                    <div className='space'></div>
                    <button
                        onClick={navigateToSignUp}
                        className='btn secondary-btn btn-w-auto'>Sing up</button>
                </div>
            </div>
        </div>
    )
}

export default Login