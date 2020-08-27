import React, { useState } from 'react'
import { AppBar, Icon, Typography, Toolbar, Button, TextField, Grid } from '@material-ui/core';
import '../../styles/Header.css'
import ResponsiveDialog from '../shared/ResponsiveDialog';

export default function Header({ stage, appState }) {

    const [authorized, setAuthorized] = useState(false);
    const [open, setOpen] = useState(false);
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

    const openAuthDialog = () => {
        setOpen(true);
    };

    const registerAccount = () => {

    };

    const loginAccount = () => {

    }

    const openInfoDialog = (dialogId) => {

    }

    const Header = () => {
        return (
            <div></div>
        );
    }

    const Body = () => {
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
        );
    }

    const Footer = () => {
        return (
            <div></div>
        );
    }

    console.log(appState, 'appState');
    return (
        <div className="root-class">
            <AppBar className={stage === 'unscrolled' ? 'app-bar unscrolled' : 'app-bar scrolled'}>
                {appState === 'loaded'
                    ? <Toolbar>
                        <Typography className="header-logo">
                            <a href="https://packurbags.pavanaditya.com">
                                <img src={stage === 'scrolled' ? require('../../assets/logos/pack-ur-bags-bg.png') : require('../../assets/logos/pack-ur-bags-contrast.png')} />
                            </a>
                        </Typography>
                        <Button
                            variant="contained"
                            className="info-button info-btn-1"
                            startIcon={<img className="info-btn-logo" src={require('../../assets/images/info-btn-1-bg.png')} />}
                            onClick={() => openInfoDialog(1)}
                        >
                            <div>
                                PUB<b>DOUBLECASHBACK</b> <br />
                                <div style={{ fontSize: '7px', color: "gray" }}>Free Cancellation Assured</div>
                            </div>
                        </Button>
                        <Button
                            variant="contained"
                            className="info-button info-btn-2"
                            startIcon={<img className="info-btn-logo" src={require('../../assets/images/info-btn-2-bg.png')} />}
                            onClick={() => openInfoDialog(2)}
                        >
                            <div>
                                <b>My Trips</b>
                            </div>
                        </Button>
                        <Button
                            variant="contained"
                            className="info-button info-btn-3"
                            startIcon={<img className="info-btn-logo" src={require('../../assets/images/info-btn-3-bg.png')} />}
                            onClick={() => openInfoDialog(3)}
                        >
                            <div>
                                <b>24 x 7</b> <br />
                                <div style={{ fontSize: '8px', color: "gray" }}> Support </div>
                            </div>
                        </Button>
                        <Button
                            variant="contained"
                            className="info-button info-btn-4"
                            startIcon={<img className="info-btn-logo info-btn-logo-4" src={require('../../assets/images/info-btn-4-bg.png')} />}
                            onClick={() => openInfoDialog(4)}
                        >
                            <div></div>
                        </Button>
                        <Button
                            variant="contained"
                            className="info-button info-btn-5"
                            startIcon={<img className="info-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo.png')} />}
                            onClick={() => openInfoDialog(5)}
                        >
                            <div>
                                <b>Partners and Collaborators</b>  <br />
                                <div style={{ fontSize: '8px', color: "gray" }}> Join hands with Pack Ur Bags</div>
                            </div>
                        </Button>
                        {
                            authorized === 'load'
                                ? <div></div>
                                : authorized === true
                                    ? <div className="authorized"></div>
                                    : <div className="unauthorized">
                                        <Button
                                            variant="contained"
                                            className="auth-button"
                                            startIcon={<img className="auth-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo-bw.png')} />}
                                            endIcon={<Icon className="material-icon">expand_more</Icon>}
                                            onClick={() => openAuthDialog()}
                                        >
                                            Login or Create Account
                                    </Button>
                                    </div>
                        }
                        <Button
                            variant="contained"
                            className="info-button info-btn-6"
                            startIcon={<img className="info-btn-logo-6" src={require('../../assets/images/india-flag.jpg')} />}
                            endIcon={<Icon className="material-icon-6">expand_more</Icon>}
                            onClick={() => openInfoDialog(6)}
                        >
                            <div>
                                <b>India</b>
                            </div>
                        </Button>
                        <ResponsiveDialog Header={Header} Body={Body} Footer={Footer} open={open} setOpen={setOpen} />
                    </Toolbar>
                    : <Toolbar>
                        <Typography className="header-logo">
                            <a href="https://packurbags.pavanaditya.com">
                                <img src={require('../../assets/logos/pack-ur-bags.png')} />
                            </a>
                        </Typography>
                    </Toolbar>
                }
            </AppBar>
        </div>
    )
}
