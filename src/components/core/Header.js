import React from 'react'
import { AppBar, Icon, MenuItem, Typography, Toolbar, makeStyles } from '@material-ui/core';
import '../../styles/Header.css'

export default function Header({ stage }, { authorized }) {



    return (
        <div className="root-class">
            <AppBar className={stage === 'unscrolled' ? 'app-bar unscrolled' : 'app-bar scrolled'}>
                <Toolbar>
                    <Typography variant="h5" className="header-logo">
                        <a href="https://packurbags.pavanaditya.com">
                            <img src={stage === 'scrolled' ? require('../../assets/logos/pack-ur-bags-bg.png') : require('../../assets/logos/pack-ur-bags.png')} />
                        </a>
                    </Typography>
                    {
                        authorized === 'load'
                            ? <div></div>
                            : authorized === true
                                ? <div className="authorized"></div>
                                : <div className="unauthorized"></div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}
