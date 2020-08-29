import React from 'react'
import Header from '../core/Header';
// import logo from '../../assets/logos/pack-ur-bags.png';
import planeLoad from '../../assets/images/plane-fly.gif';
import '../../styles/Loader.css'

export default function Loader() {
    return (
        <div className="Load">
            <Header stage={'unscrolled'} appState={'loading'} />
            <div className="App-Load-Screen">
                {/* <img src={logo} className="App-logo" alt="packurbags-logo" /> */}
                <img src={planeLoad} className="App-Loader" alt="plane-fly" />
            </div>
        </div>
    )
}
