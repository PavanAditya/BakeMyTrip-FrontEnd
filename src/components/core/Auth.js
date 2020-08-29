import React, { useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core';
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

    return (
        <div className="edit-register-form">
            <div className="toggle-btn">
                <Grid container>
                    <Grid item xs={6} sm={6} className={toggle === 'login' ? 'toggle-item toggle-active' : 'toggle-item'} align="center" onClick={() => setToggle('login')}>LOGIN</Grid>
                    <Grid item xs={6} sm={6} className={toggle === 'register' ? 'toggle-item toggle-active' : 'toggle-item'} align="center" onClick={() => setToggle('register')}>REGISTER</Grid>
                </Grid>
            </div>
            <p className="modal-title"><b className="auth-modal-head">{'Login/Signup'}</b></p>
            {toggle === 'login'
                ? <form noValidate autoComplete="off">
                    <TextField className="input-field" variant="outlined" id="loginId" onChange={e => onChangeLoginText('loginId', e.target.value)} placeholder="Enter Email or Mobile Number"></TextField>
                    <TextField className="input-field" variant="outlined" id="loginPassword" onChange={e => onChangeLoginText('password', e.target.value)} placeholder="Enter Password" />
                    <Button
                        variant="contained"
                        className="auth-button form-btn"
                        onClick={() => loginAccount()}
                    >
                        Login to Account
                    </Button>
                </form>
                : <form noValidate autoComplete="off">
                    <TextField className="input-field" variant="outlined" id="firstName" onChange={e => onChangeRegisterText('firstName', e.target.value)} placeholder="First Name"></TextField>
                    <TextField className="input-field" variant="outlined" id="lastName" onChange={e => onChangeRegisterText('lastName', e.target.value)} placeholder="Last Name"></TextField>
                    <TextField className="input-field" variant="outlined" id="phNum" onChange={e => onChangeRegisterText('mobileNumber', e.target.value)} placeholder="Phone Number" maxLength="10"></TextField>
                    <TextField className="input-field" variant="outlined" id="email" onChange={e => onChangeRegisterText('email', e.target.value)} placeholder="Email"></TextField>
                    <TextField className="input-field" variant="outlined" id="password" onChange={e => onChangeRegisterText('password', e.target.value)} placeholder="Password" />
                    <TextField className="input-field" variant="outlined" id="confirmPassword" onChange={e => onChangeRegisterText('confirmPassword', e.target.value)} placeholder="Confirm Password" />
                    <Button
                        variant="contained"
                        className="auth-button form-btn"
                        onClick={() => registerAccount()}
                    >
                        Create Account
                    </Button>
                </form>}
        </div>
    )
}
