import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../error/ErrorMessage"

const SignUp = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
    const [errorMessage] = useState('')
    const navigate = useNavigate();

    const navigateToForgetPassword = () => {
        navigate('/forget-password');
    };
    const navigateToLogin = () => {
        navigate('/login');
    };

    const onSignUpClick = async () => {
        alert('Not implemented');
    }

    return (
        <div className='container-auth'>
            <div className='wrap'>
                <h1>Sign Up</h1>
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
                <div className='input'>
                    <input
                        value={confirmPasswordValue}
                        onChange={e => setConfirmPasswordValue(e.target.value)}
                        type="password"></input>
                </div>
                <div className='action-container'>
                    <button
                        disabled={!emailValue || !passwordValue || !confirmPasswordValue}
                        onClick={onSignUpClick}
                        className='primary-btn btn'>SignUp</button>
                </div>
                <div className='btn-container'>
                    <button
                        onClick={navigateToForgetPassword}
                        className='btn secondary-btn btn-w-auto'>Forgot your password?</button>
                    <div className='space'></div>
                    <button
                        onClick={navigateToLogin}
                        className='btn secondary-btn btn-w-auto'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp