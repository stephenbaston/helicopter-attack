import React from 'react';
import './TitleScreen.scss';
import HelicopterImage from '../images/helicopter/helicopter_xl.png';

class TitleScreen extends React.Component {
    render() {
        return (
            <div className="TitleScreen">
                <p className="Title">HELICOPTER ATTACK</p>
                <p className="SubTitle">created by Finley Baston</p>
                <img src={HelicopterImage} className="Helicopter" />
            </div>
        )
    }
}

export default TitleScreen;