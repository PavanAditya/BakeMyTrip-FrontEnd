import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Radio, FormControlLabel, RadioGroup, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { icons } from '../../assets/json/icons.json'
import { airportsList } from '../../assets/json/airports.json'
import '../../styles/HomePage.css'

export default function HomePage() {

    const [active, setActive] = useState(0);
    const [trip, setTrip] = useState('one');
    const [flight, setFlight] = useState({
        fromLoc: 'Vishakhapatnam',
        toLoc: 'Bangalore',
        fromDate: '',
        toDate: '',
        class: ''
    });
    const iconsList = icons;
    const airports = airportsList;

    const changeFlightDets = (key, value) => {
        console.log(key, value);
        const newFlight = { ...flight };
        newFlight[key] = value;
        setFlight(newFlight);
    }

    const swapFromAndToLocations = () => {
        let tempLoc = flight.fromLoc;
        setFlight({
            ...flight,
            fromLoc: flight.toLoc,
            toLoc: tempLoc
        });
    };

    const getAirport = (cityName) => {
        return airports.find(city => city.city_name === cityName);
    }

    const trendidngSearch = (city1, city2) => {
        setFlight({
            ...flight,
            fromLoc: city1,
            toLoc: city2
        });
    }

    const searchFlight = () => {

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
                            inputValue={flight.fromLoc}
                            onChange={(e, newValue) => changeFlightDets('fromLoc', newValue)}
                            getOptionLabel={(option) => option.city_name}
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                        <span className="from-loc airport-dets">
                            {getAirport(flight.fromLoc)?.IATA_code + ', ' + (getAirport(flight.fromLoc)?.airport_name.length > 35 ? getAirport(flight.fromLoc)?.airport_name.slice(0, 35) + '...' : getAirport(flight.fromLoc)?.airport_name)}
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
                            inputValue={flight.toLoc}
                            onChange={(e, newValue) => changeFlightDets('toLoc', newValue)}
                            getOptionLabel={(option) => option.city_name}
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                        <span className="from-loc airport-dets">
                            {getAirport(flight.toLoc)?.IATA_code + ', ' + (getAirport(flight.toLoc)?.airport_name.length > 35 ? getAirport(flight.toLoc)?.airport_name.slice(0, 35) + '...' : getAirport(flight.toLoc)?.airport_name)}
                        </span>
                    </Grid>
                    <Grid item className="select-input select-3"></Grid>
                    <Grid item className="select-input select-4"></Grid>
                    <Grid item className="select-input select-5"></Grid>
                </Grid>
                <div className="trending-search">
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
                    <div>Hotels</div>
                );
            case 2:
                return (
                    <div>Villas & Apts</div>
                );
            case 3:
                return (
                    <div>Holidays</div>
                );
            case 4:
                return (
                    <div>Trains</div>
                );
            case 5:
                return (
                    <div>Buses</div>
                );
            case 6:
                return (
                    <div>Visa</div>
                );
            case 7:
                return (
                    <div>Cabs</div>
                );
            case 8:
                return (
                    <div>Charter Flights</div>
                );
            case 9:
                return (
                    <div>More</div>
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
        </div>
    )
}
