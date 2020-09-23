import React, { useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core';
import { googleAuth } from '../../services/AuthService';
import '../../styles/Auth.css';

export default function Auth() {

    const [toggle, setToggle] = useState('login');
    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [login, setLogin] = useState({
        loginId: '',
        password: ''
    });

    const onChangeRegisterText = (key, value) => {
        const newRegister = { ...register };
        newRegister[key] = value;
        setRegister(newRegister);
    }

    const onChangeLoginText = (key, value) => {
        const newRegister = { ...login };
        newRegister[key] = value;
        setLogin(newRegister);
    }

    const registerAccount = () => {

    };

    const loginAccount = () => {

    }

    const googleLogin = () => {
        googleAuth();
    }

    return (
        <div className="edit-register-form">
            <div className="toggle-btn">
                <Grid container>
                    <Grid item xs={6} sm={6} className={toggle === 'login' ? 'toggle-item toggle-active login' : 'toggle-item'} align="center" onClick={() => setToggle('login')}>LOGIN</Grid>
                    <Grid item xs={6} sm={6} className={toggle === 'register' ? 'toggle-item toggle-active register' : 'toggle-item'} align="center" onClick={() => setToggle('register')}>REGISTER</Grid>
                </Grid>
            </div>
            <p className="modal-title"><b className="auth-modal-head">{'Login/Signup'}</b></p>
            {toggle === 'login'
                ? <form noValidate autoComplete="off">
                    <TextField className="input-field" value={login.loginId} variant="outlined" id="loginId" onChange={e => onChangeLoginText('loginId', e.target.value)} placeholder="Enter Email or Mobile Number"></TextField>
                    <TextField className="input-field" type="password" value={login.password} variant="outlined" id="loginPassword" onChange={e => onChangeLoginText('password', e.target.value)} placeholder="Enter Password" />
                    <Button
                        variant="contained"
                        className="form-btn login"
                        onClick={() => loginAccount()}
                    >
                        Login to Account
                    </Button>
                </form>
                : <form noValidate autoComplete="off">
                    <TextField className="input-field" value={register.firstName} variant="outlined" id="firstName" onChange={e => onChangeRegisterText('firstName', e.target.value)} placeholder="First Name"></TextField>
                    <TextField className="input-field" value={register.lastName} variant="outlined" id="lastName" onChange={e => onChangeRegisterText('lastName', e.target.value)} placeholder="Last Name"></TextField>
                    <TextField className="input-field" value={register.mobileNumber} variant="outlined" id="phNum" onChange={e => onChangeRegisterText('mobileNumber', e.target.value)} placeholder="Phone Number" maxLength="10"></TextField>
                    <TextField className="input-field" value={register.email} variant="outlined" id="email" onChange={e => onChangeRegisterText('email', e.target.value)} placeholder="Email"></TextField>
                    <TextField className="input-field" type="password" value={register.password} variant="outlined" id="password" onChange={e => onChangeRegisterText('password', e.target.value)} placeholder="Password" />
                    <TextField className="input-field" type="password" value={register.confirmPassword} variant="outlined" id="confirmPassword" onChange={e => onChangeRegisterText('confirmPassword', e.target.value)} placeholder="Confirm Password" />
                    <Button
                        variant="contained"
                        className="form-btn register"
                        onClick={() => registerAccount()}
                    >
                        Create Account
                    </Button>
                </form>}
            <span className="google-auth-block">
                <p className="google-auth-title">Or Login/Signup with</p>
                <Button
                    variant="contained"
                    className="google-auth-button"
                    onClick={() => googleLogin()}
                >
                    <img className="google-auth-icon" src={require("../../assets/icons/google-icon.png")} alt="google-auth-icon"></img>
                    Login with Google
                </Button>
                <p className="google-auth-title tc">By proceeding, you agree to <b>PackUrBags</b>'s <a href="https://packurbags.pavanaditya.com/privacynote" target="_" className="privacy">Privacy Policy</a>, User Agreement and T&Cs</p>
            </span>
        </div>
    )
}
