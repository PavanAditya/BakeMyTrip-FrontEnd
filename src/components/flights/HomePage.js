import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Radio, FormControlLabel, RadioGroup, TextField, Button, Snackbar, Slide, Popover, Typography, Slider } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { icons } from '../../assets/json/icons.json'
import { airportsList } from '../../assets/json/airports.json'
import '../../styles/HomePage.css'
import moment from 'moment';

export default function HomePage() {

    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState('');
    const [snackBarType, setSnackBarType] = useState('info');
    const [snackBarTransition, setSnackBarTransition] = useState(undefined);
    const [active, setActive] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = Boolean(anchorEl);
    const popoverId = openPopover ? 'simple-popover' : undefined;
    const [trip, setTrip] = useState('one');
    const [flight, setFlight] = useState({
        fromLoc: 'Vishakhapatnam',
        toLoc: 'Bangalore',
        fromLocInput: '',
        toLocInput: '',
        fromDate: moment().format('MM/DD/YYYY'),
        toDate: moment().format('MM/DD/YYYY'),
        travellers: 1,
        children: 0,
        class: 'eco',
        fare: 'regular'
    });
    const iconsList = icons;
    const airports = airportsList;

    const changeFlightDets = (key, value) => {
        console.log(key, value);
        const newFlight = { ...flight };
        newFlight[key] = value;
        if (key === 'fromDate') {
            newFlight['toDate'] = null;
        }
        setFlight(newFlight);
    }

    const swapFromAndToLocations = () => {
        let tempLoc = flight.fromLoc;
        let tempLocInput = flight.fromLocInput;
        setFlight({
            ...flight,
            fromLoc: flight.toLoc,
            toLoc: tempLoc,
            fromLocInput: flight.toLocInput,
            toLocInput: tempLocInput
        });
    };

    const getAirport = (cityName) => {
        return airports.find(city => city.city_name === cityName);
    }

    const getMonthName = (month) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[month - 1];
    }

    const getDayName = (day) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (day) {
            return days[moment(day).day()];
        } else {
            return '';
        }
    }

    const getClassName = (classValue) => {
        switch (classValue) {
            case 'eco':
                return 'ECONOMY/PREMIUM ECONOMY'
            case 'pre-eco':
                return 'PREMIUM ECONOMY'
            case 'bus':
                return 'BUSINESS'
            default:
                return 'ECONOMY'
        }
    }

    const trendidngSearch = (city1, city2) => {
        setFlight({
            ...flight,
            fromLoc: city1,
            toLoc: city2,
            fromLocInput: city1,
            toLocInput: city2
        });
    }

    const searchFlight = () => {
        if (flight.fromLocInput === '' || flight.toLocInput === '') {
            setSnackBarType('error');
            setSnackBarMsg(`Please Select valid ${flight.fromLocInput === '' ? `"From"` : ''} ${flight.fromLocInput === '' && flight.toLocInput === '' ? 'and' : ''} ${flight.toLocInput === '' ? `"To"` : ''} location.`);
            setSnackBarTransition(() => snackBarLeft);
            setSnackBarOpen(true);
        } else if (flight.fromLocInput === flight.toLocInput) {
            setSnackBarType('error');
            setSnackBarMsg(`"From" and "To" locations cannot be the same.`);
            setSnackBarTransition(() => snackBarLeft);
            setSnackBarOpen(true);
        }
        else {
            console.log(flight.fromLocInput, flight.toLocInput);
        }
    }

    const snackBarLeft = (props) => {
        return <Slide {...props} direction='left' />;
    }

    const snackBarClose = () => {
        setSnackBarOpen(false);
    }

    const flightsBlock = () => {
        return (
            <div className="flights-block">
                <Grid container className="config-row">
                    <Grid item xs={3} sm={3}>
                        <RadioGroup row aria-label="position" name="trip" defaultValue={trip} onChange={e => setTrip(e.target.value)}>
                            <FormControlLabel className={trip === 'one' ? 'radio-btn active' : 'radio-btn '} value="one" control={<Radio color="default" size="small" />} label="ONEWAY" />
                            <FormControlLabel className={trip === 'round' ? 'radio-btn active' : 'radio-btn'} value="round" control={<Radio color="default" size="small" />} label="ROUNDTRIP" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={6} sm={6}></Grid>
                    <Grid item xs={3} sm={3} align="right">Book Domestic and International flights</Grid>
                </Grid>
                <Grid container className="select-input-row">
                    <Grid item className="select-input select-1">
                        <span className="from-loc">FROM</span>
                        <Autocomplete
                            id="from-loc"
                            options={airports}
                            inputValue={flight.fromLocInput}
                            onInputChange={(e, newValue) => { changeFlightDets('fromLoc', newValue); changeFlightDets('fromLocInput', newValue) }}
                            getOptionLabel={(option) => option.city_name}
                            renderInput={(params) => <TextField {...params} placeholder={flight.fromLoc} variant="outlined" />}
                        />
                        <span className="from-loc airport-dets">
                            {getAirport(flight.fromLocInput)
                                ? (getAirport(flight.fromLocInput)?.IATA_code + ', ' + (getAirport(flight.fromLocInput)?.airport_name.length > 35
                                    ? getAirport(flight.fromLocInput)?.airport_name.slice(0, 35) + '...' : getAirport(flight.fromLocInput)?.airport_name))
                                : ''}
                        </span>
                    </Grid>
                    <span className="from-to" onClick={swapFromAndToLocations}>
                        <Icon>swap_horiz</Icon>
                    </span>
                    <Grid item className="select-input select-2">
                        <span className="from-loc">TO</span>
                        <Autocomplete
                            id="to-loc"
                            options={airports}
                            inputValue={flight.toLocInput}
                            onInputChange={(e, newValue) => { changeFlightDets('toLoc', newValue); changeFlightDets('toLocInput', newValue) }}
                            getOptionLabel={(option) => option.city_name}
                            renderInput={(params) => <TextField {...params} placeholder={flight.toLoc} variant="outlined" />}
                        />
                        <span className="from-loc airport-dets">
                            {getAirport(flight.toLocInput)
                                ? (getAirport(flight.toLocInput)?.IATA_code + ', ' + (getAirport(flight.toLocInput)?.airport_name.length > 35
                                    ? getAirport(flight.toLocInput)?.airport_name.slice(0, 35) + '...' : getAirport(flight.toLocInput)?.airport_name))
                                : ''}
                        </span>
                    </Grid>
                    <Grid item className="select-input select-3">
                        <div className="date-title">DEPARTURE <Icon className="date-icon">expand_more</Icon></div>
                        <span className="day">{(flight.fromDate.split('/')[1] / 1)}</span><span className="month">{' ' + getMonthName(flight.fromDate.split('/')[0] / 1) + `' `}</span><span className="year">{(flight.fromDate.split('/')[2]).slice(2, 4)}</span>
                        <div className="date-title day-title">{getDayName(flight.fromDate)}</div>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                className={flight.fromDate ? 'complete-date' : 'empty-date'}
                                disableToolbar
                                variant="inline"
                                format="DD/MM/YYYY"
                                margin="normal"
                                id="fromDate"
                                // minDate={new Date()}
                                disablePast='true'
                                value={flight.fromDate}
                                onChange={date => changeFlightDets('fromDate', moment(date).format('MM/DD/YYYY'))}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item className="select-input select-4">
                        <div className="date-title">RETURN <Icon className="date-icon">expand_more</Icon></div>
                        <div>
                            {flight.toDate
                                ? (<div><span className="day">{(flight.toDate.split('/')[1] / 1)}</span><span className="month">{' ' + getMonthName(flight.toDate.split('/')[0] / 1) + `' `}</span><span className="year">{(flight.toDate.split('/')[2]).slice(2, 4)}</span></div>)
                                : ''}
                            {flight.toDate
                                ? (<Icon className="cancel-icon" onClick={() => changeFlightDets('toDate', null)}>cancel</Icon>)
                                : ''
                            }
                        </div>
                        <div className="date-title day-title">{getDayName(flight.toDate)}</div>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                className={flight.toDate ? 'complete-date' : 'empty-date'}
                                disableToolbar
                                variant="inline"
                                format="DD/MM/YYYY"
                                margin="normal"
                                id="toDate"
                                minDate={flight.fromDate}
                                // disablePast='true'
                                value={flight.toDate}
                                onChange={date => changeFlightDets('toDate', moment(date).format('MM/DD/YYYY'))}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item className="select-input select-5" aria-describedby={popoverId} onClick={e => setAnchorEl(e.currentTarget)}>
                        <div className="date-title">TRAVELLERS & CLASS <Icon className="date-icon">expand_more</Icon></div>
                        <div>
                            <span className="day">{flight.travellers}</span><span className="month">{` Adult${flight.travellers > 1 ? 's' : ''}`}</span>
                            {flight.children
                                ? (<span><span className="day">{flight.children}</span><span className="month">{flight.children > 1 ? ' Children' : ' Child'}</span></span>)
                                : ''}
                        </div>
                        <div className="date-title day-title">{getClassName(flight.class)}</div>
                    </Grid>
                    <Popover
                        id={popoverId}
                        open={openPopover}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <span className="popover-span">
                            <Typography id="adult-slider" gutterBottom>
                                ADULTS (12y+)
                                {/* <span className="slider-val">{flight.travellers}</span> */}
                            </Typography>
                            <Slider
                                defaultValue={flight.travellers}
                                value={flight.travellers}
                                onChange={(e, value) => changeFlightDets('travellers', value)}
                                aria-labelledby="adult-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={9}
                            />
                        </span>
                        <span className="popover-span">
                            <Typography id="adult-slider" gutterBottom>
                                CHILDREN (2 - 12yr)
                                {/* <span className="slider-val">{flight.children}</span> */}
                            </Typography>
                            <Slider
                                defaultValue={flight.children}
                                value={flight.children}
                                onChange={(e, value) => changeFlightDets('children', value)}
                                aria-labelledby="adult-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={6}
                            />
                        </span>
                        <span className="popover-span">
                            <Typography id="adult-slider" gutterBottom>
                                CHOOSE TRAVEL CLASS
                            </Typography>
                            <div aria-labelledby="adult-slider">
                                <Button
                                    variant="contained"
                                    className={flight.class === 'eco' ? "fare-btn class-btn active" : "fare-btn class-btn"}
                                    onClick={() => changeFlightDets('class', 'eco')}
                                >Economy/Premium Economy</Button>
                                <Button
                                    variant="contained"
                                    className={flight.class === 'pre-eco' ? "fare-btn class-btn active" : "fare-btn class-btn"}
                                    onClick={() => changeFlightDets('class', 'pre-eco')}
                                >Premium Economy</Button>
                                <Button
                                    variant="contained"
                                    className={flight.class === 'bus' ? "fare-btn class-btn active" : "fare-btn class-btn"}
                                    onClick={() => changeFlightDets('class', 'bus')}
                                >Business</Button>
                            </div>
                        </span>
                    </Popover>
                </Grid>
                <div className="trending-search">
                    <span className="fare-btns">
                        <Button
                            variant="contained"
                            className={flight.fare === 'regular' ? "fare-btn active" : "fare-btn"}
                            onClick={() => changeFlightDets('fare', 'regular')}
                        >Regular Fare</Button>
                        <Button
                            variant="contained"
                            className={flight.fare === 'student' ? "fare-btn active" : "fare-btn"}
                            onClick={() => changeFlightDets('fare', 'student')}
                        >Student Fare</Button>
                    </span>
                    <span className="trend-seperation"></span>
                    <span className="trend">Trending Searches: </span>
                    <span className="trend search" onClick={() => { trendidngSearch('Vishakhapatnam', 'Goa') }}>Vishakhapatnam <span className="search-arrow"><Icon className="search-icon">arrow_right_alt</Icon></span> Goa</span>
                    <span className="trend search" onClick={() => { trendidngSearch('Mumbai', 'New Delhi') }}>Mumbai <span className="search-arrow"><Icon className="search-icon">arrow_right_alt</Icon></span> New Delhi</span>
                    <span className="trend search" onClick={() => { trendidngSearch('Chennai', 'Hyderabad') }}>Chennai <span className="search-arrow"><Icon className="search-icon">arrow_right_alt</Icon></span> Hyderabad</span>
                </div>
                <Button
                    variant="contained"
                    className="search-btn"
                    onClick={() => searchFlight()}
                >
                    SEARCH
                </Button>
            </div>
        );
    }

    const displayBlock = () => {
        switch (active) {
            case 0:
                return (
                    flightsBlock()
                )
            case 1:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>HOTEL BOOKINGS Coming Soon ...!</b>
                    </div>
                );
            case 2:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>VILLAS & APARTMENTS SALE Coming Sooon ...!</b>
                    </div>
                );
            case 3:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>HOLIDAYS PLANS Coming Sooon ...!</b>
                    </div>
                );
            case 4:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>TRAIN RESERVATIONS Coming Sooon ...!</b>
                    </div>
                );
            case 5:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>BUSES BOOKINGS Coming Sooon ...!</b>
                    </div>
                );
            case 6:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>VISA OPTION Coming Sooon ...!</b>
                    </div>
                );
            case 7:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>CABS Coming Sooon ...!</b>
                    </div>
                );
            case 8:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>CHARTER FLIGTHS BUY/RENT Coming Sooon ...!</b>
                    </div>
                );
            case 9:
                return (
                    <div className="main-block-option">
                        <img src={require('../../assets/logos/pack-ur-bags.png')} style={{ height: 150 }} alt='pack ur bags logo' />
                        <b>MANY MORE Options Coming Sooon ...!</b>
                    </div>
                );
            default:
                return (
                    flightsBlock()
                )
        }
    }

    return (
        <div>
            <div className="home-page">
                <div className="mobile-options-area"></div>
                <div className="top-div">
                    <div className="booking-area">
                        <div className="options-area">
                            <Grid container>
                                {
                                    iconsList.map((icon, i) =>
                                        <Grid item key={i} className={active === i ? 'option active' : 'option'} onClick={() => setActive(i)}>
                                            <img className="option-img" src={active === i ? require('../../assets/icons/' + icon.iconActiveImg) : require('../../assets/icons/' + icon.iconImg)} alt="option-icon-img" />
                                            <span className={i === 8 ? 'option-8' : ''}>{icon.iconName} {i === 9 ? <Icon className="option-name-icon">expand_more</Icon> : <span></span>} </span>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </div>
                        {displayBlock()}
                    </div>
                </div>
                <div>
                    <Link to="flights">Flights</Link>
                </div>
            </div>
            <Snackbar
                open={snackBarOpen}
                onClose={snackBarClose}
                TransitionComponent={snackBarTransition}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={snackBarClose} severity={snackBarType}>
                    {snackBarMsg}
                </Alert>
            </Snackbar>
        </div>
    )
}
