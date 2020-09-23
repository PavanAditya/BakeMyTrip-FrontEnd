import React, { useState } from 'react'
import { AppBar, Icon, Typography, Toolbar, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ResponsiveDialog from '../shared/ResponsiveDialog';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Auth from './Auth';
import { partners } from '../../assets/json/partners.json';
import { coupons } from '../../assets/json/coupons.json';
import '../../styles/Header.css'

export default function Header({ stage, appState }) {

    const [authorized, setAuthorized] = useState(false);
    const [open, setOpen] = useState(false);
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [infoDialogId, setInfoDialogId] = useState(0);
    const [copy, setCopy] = useState(-1);

    const partnersList = partners;
    const couponCodes = coupons;

    const openAuthDialog = () => {
        setOpen(true);
    };

    const InfoBody = () => {
        switch (infoDialogId) {
            case 1:
                return (
                    <div>
                        <h3 className="info-modal-head">Pack Ur Cash Backs</h3>
                        <b style={{ fontSize: 20 }}>Pack Ur Bags </b> handles customers happieness and satisfaction by providing discounted coupon codes option. Use the following codes for availing discounts on your bookings.
                        {
                            couponCodes.map((coupon, i) =>
                                <div key={i}>
                                    <Grid container className="coupon-code">
                                        <Grid item xs={9} sm={9}>
                                            <div style={{ fontSize: 20, fontWeight: 'bolder', color: 'gray' }}>
                                                {coupon.couponCode}
                                            </div>
                                            <span style={{ fontSize: 12, color: 'gray' }} align="left">{coupon.couponDesc}</span>
                                        </Grid>
                                        <Grid item xs={3} sm={3} className={copy !== i ? 'copy-button' : 'copy-button copied'} onClick={() => setCopy(i)}>
                                            <CopyToClipboard text={coupon.couponCode}>
                                                <span>
                                                    {copy !== i ? 'Copy' : 'Copied'}
                                                </span>
                                            </CopyToClipboard>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }
                    </div >
                );
            case 2:
                return (
                    <div>
                        <h3 className="info-modal-head">Packed Ur Bags</h3>
                        Browse Your Trip History and also get suggestions for your next trip.
                        <br />
                        <br />
                        Signin for acquiring the awesome <b style={{ fontSize: 18 }}>Packed Ur Bags</b> feature, the trips history option provided by <b><i style={{ fontSize: 18 }}>Pack Ur Bags</i></b>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3 className="info-modal-head">24 x 7 Pack Ur Bags support</h3>
                        We provide 24 x 7, 100% satisfaction guarenteed support to our customers. Your satisfaction is our utmost priority.
                        <br />
                        <br />
                        Amist the Covid Scenario our Customer Support team is workimg from 24 hrs, 7 days a week. Every individual at <b><i style={{ fontSize: 18 }}>Pack Ur Bags </i></b>
                        feels responsible for his/her duty of supporting customers and will do his best to serve you.
                        <br />
                        <br />
                        For support Contact: <br />
                        +91 987-6543-210 <br />
                        or
                        support@packurbags.com
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h3 className="info-modal-head">Pack Ur Wallet</h3>
                        Why risking money by keeping it in your pocket, when you have the option for keeping it in an E-Wallet.
                        <br />
                        <br />
                        <b><i style={{ fontSize: 18 }}>Pack Ur Bags</i></b> has the option for adding your money to your E-Wallet and can use it while booking urgent tickets. We are just Saving your time.
                        <br />
                        <br />
                        Signin for acquiring the awesome <b>Pack Ur Wallet</b> feature, an E-Wallet option provided by <b><i style={{ fontSize: 18 }}>Pack Ur Bags</i></b>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h3 className="info-modal-head">Partners and Collaborators</h3>
                        Our trust and collaboration with our partners is as strong as the service and trust we provide them to our customers.
                        <p><span style={{ fontSize: 20, color: 'gray' }}><b>AIRLINES WE WORK WITH</b></span></p>
                        {
                            partnersList.map((partner, i) =>
                                <div key={i}>
                                    <Grid container className="country-name">
                                        <Grid item xs={6} sm={6}>
                                            <img className="partner-logo" src={require('../../assets/images/' + partner.partnerLogo)} alt={partner.partnerName + ' logo'} />
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <span style={{ fontSize: 22, textTransform: 'uppercase' }}><b>{partner.partnerName}</b></span>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h3 className="info-modal-head">Countries We Serve</h3>
                        <div>
                            <Grid container className="country-name">
                                <Grid item xs={6} sm={6}>
                                    <img className="country-flag" src={require('../../assets/images/india-flag.jpg')} alt='India flag' />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <span style={{ fontSize: 22 }}><b>INDIA</b></span>
                                </Grid>
                            </Grid>
                        </div>
                        <br />
                        <b><a href="https://privacynote.packurbags.pavanaditya.com" target="_" className="privacy"> Privacy Policy</a> for INDIA.</b>
                        <br />
                        <br />
                        <div>
                            We serve every Indian as of now and are on an immediate urge to expand our business also to the outside world soon.
                        </div>
                        <p><span style={{ fontSize: 22, color: 'gray' }}><b>COUNTRIES IN PLAN</b></span></p>
                        <img className="all-country-flags" src={require('../../assets/images/all-country-flags.jpg')} alt='All country flags' />
                    </div>
                );
            default:
                return (
                    <div>
                        <h3 className="info-modal-head">Countries We Serve</h3>
                        <div>
                            <Grid container className="country-name">
                                <Grid item xs={6} sm={6}>
                                    <img className="country-flag" src={require('../../assets/images/india-flag.jpg')} alt='India flag' />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <span style={{ fontSize: 22 }}><b>INDIA</b></span>
                                </Grid>
                            </Grid>
                        </div>
                        <br />
                        <b><a href="https://privacynote.packurbags.pavanaditya.com" target="_" className="privacy"> Privacy Policy</a> for INDIA.</b>
                        <br />
                        <br />
                        <div>
                            We serve every Indian as of now and are on an immediate urge to expand our business also to the outside world soon.
                        </div>
                        <p><span style={{ fontSize: 22, color: 'gray' }}><b>COUNTRIES IN PLAN</b></span></p>
                        <img className="all-country-flags" src={require('../../assets/images/all-country-flags.jpg')} alt='All country flags' />
                    </div>
                );
        }
    };

    const openInfoDialog = (dialogId) => {
        setInfoDialogId(dialogId);
        setInfoDialogOpen(true);
    }

    const Header = () => {
        return (
            <div></div>
        );
    }

    const Body = () => {
        return (
            <Auth />
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
                    ? <span>
                        <Toolbar className="web-app-bar">
                            <Typography className="header-logo">
                                <Link to="home">
                                    <img src={stage === 'scrolled' ? require('../../assets/logos/pack-ur-bags-bg.png') : require('../../assets/logos/pack-ur-bags-contrast.png')} alt="Pack Ur Bags Logo" />
                                </Link>
                            </Typography>
                            <Button
                                variant="contained"
                                className="info-button info-btn-1"
                                startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-1-bg.png')} alt='info-icon-1' />}
                                onClick={() => { setCopy(-1); openInfoDialog(1); }}
                            >
                                <div>
                                    PUB<b>DOUBLECASHBACK</b> <br />
                                    <div style={{ fontSize: '7px', color: "gray" }}>Free Cancellation Assured</div>
                                </div>
                            </Button>
                            <Button
                                variant="contained"
                                className="info-button info-btn-2"
                                startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-2-bg.png')} alt='info-icon-2' />}
                                onClick={() => openInfoDialog(2)}
                            >
                                <div>
                                    <b>My Trips</b>
                                </div>
                            </Button>
                            <Button
                                variant="contained"
                                className="info-button info-btn-3"
                                startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-3-bg.png')} alt='info-icon-3' />}
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
                                startIcon={<img className="info-btn-logo info-btn-logo-4" src={require('../../assets/icons/info-btn-4-bg.png')} alt='info-icon-3' />}
                                onClick={() => openInfoDialog(4)}
                            >
                                <div></div>
                            </Button>
                            <Button
                                variant="contained"
                                className="info-button info-btn-5"
                                startIcon={<img className="info-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo.png')} alt='info-icon-4' />}
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
                                                startIcon={<img className="auth-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo-bw.png')} alt='info-icon-5' />}
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
                                startIcon={<img className="info-btn-logo-6" src={require('../../assets/images/india-flag.jpg')} alt='info-icon-6' />}
                                endIcon={<Icon className="material-icon-6">expand_more</Icon>}
                                onClick={() => openInfoDialog(6)}
                            >
                                <div>
                                    <b>India</b>
                                </div>
                            </Button>
                        </Toolbar>
                        <Toolbar className="mobile-app-bar">
                            <Typography className="header-logo">
                                <Link to="home">
                                    <img src={require('../../assets/logos/pack-ur-bags-bg.png')} alt="Pack Ur Bags Logo" />
                                </Link>
                            </Typography>
                            <Button
                                variant="contained"
                                className="mobile-info-button"
                                // startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-1-bg.png')} alt='info-icon-1' />}
                                onClick={() => { setCopy(-1); openInfoDialog(1); }}
                            >
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: "bold" }}>Promo Codes</div>
                                </div>
                            </Button>
                            {/* <Button
                                variant="contained"
                                className="mobile-info-button"
                                // startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-2-bg.png')} alt='info-icon-2' />}
                                onClick={() => openInfoDialog(2)}
                            >
                                <div>
                                    <b style={{ fontSize: '11px', fontWeight: "bold" }}>My Trips</b>
                                </div>
                            </Button> */}
                            {/* <Button
                                variant="contained"
                                className="mobile-info-button"
                                // startIcon={<img className="info-btn-logo" src={require('../../assets/icons/info-btn-3-bg.png')} alt='info-icon-3' />}
                                onClick={() => openInfoDialog(3)}
                            >
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: "bold" }}> 24 x 7 Support </div>
                                </div>
                            </Button> */}
                            {/* <Button
                                variant="contained"
                                className="mobile-info-button"
                                startIcon={<img className="info-btn-logo info-btn-logo-4" src={require('../../assets/icons/info-btn-4-bg.png')} alt='info-icon-3' />}
                                onClick={() => openInfoDialog(4)}
                            >
                                <div></div>
                            </Button> */}
                            {/* <Button
                                variant="contained"
                                className="mobile-info-button"
                                // startIcon={<img className="info-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo.png')} alt='info-icon-4' />}
                                onClick={() => openInfoDialog(5)}
                            >
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: "bold" }}>Partners and Collaborators</div>
                                </div>
                            </Button> */}
                            {
                                authorized === 'load'
                                    ? <div></div>
                                    : authorized === true
                                        ? <div className="authorized"></div>
                                        : <div className="unauthorized">
                                            <Button
                                                variant="contained"
                                                className="auth-button"
                                                startIcon={<img className="auth-btn-logo" src={require('../../assets/logos/pack-ur-bags-logo-bw.png')} alt='info-icon-5' />}
                                                // endIcon={<Icon className="material-icon">expand_more</Icon>}
                                                onClick={() => openAuthDialog()}
                                            >
                                                Login or Create Account
                                    </Button>
                                        </div>
                            }
                            {/* <Button
                                variant="contained"
                                className="mobile-info-button"
                                startIcon={<img className="info-btn-logo-6" src={require('../../assets/images/india-flag.jpg')} alt='info-icon-6' />}
                                // endIcon={<Icon className="material-icon-6">expand_more</Icon>}
                                onClick={() => openInfoDialog(6)}
                            >
                                <div>
                                    <b>IND</b>
                                </div>
                            </Button> */}
                        </Toolbar>
                        <ResponsiveDialog Header={() => { return (<div></div>); }} Body={InfoBody} Footer={() => { return (<div></div>); }} open={infoDialogOpen} setOpen={setInfoDialogOpen} />
                        <ResponsiveDialog Header={Header} Body={Body} Footer={Footer} open={open} setOpen={setOpen} setAuthorized={setAuthorized} />
                    </span>
                    : <Toolbar>
                        <Typography className="header-logo">
                            <Link to="home">
                                <img src={require('../../assets/logos/pack-ur-bags.png')} alt="Pack Ur Bags Logo" />
                            </Link>
                        </Typography>
                    </Toolbar>
                }
            </AppBar>
        </div>
    )
}
