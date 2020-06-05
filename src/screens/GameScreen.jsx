import React from 'react';
import './GameScreen.scss';

import { Engine } from '../engine';

class GameScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,
        }
    }

    fullscreen = () => {
        this.refs.canvas.height = this.state.height;
        this.refs.canvas.width = this.state.width;
    }

    componentDidMount() {
        this.fullscreen();
        this.engine = new Engine(this.refs.canvas.getContext("2d"), this.state.width, this.state.height);
        document.addEventListener("keydown", this.engine.keyDown, false);
        document.addEventListener("keyup", this.engine.keyUp, false);
        this.engine.start();
    }

    componentWillUnmount( ){
        document.removeEventListener("keydown", this.engine.keyDown, false);
        document.removeEventListener("keyup", this.engine.keyUp, false);
    }

    render() {
        return (
            <div className="GameScreen">
                <canvas ref="canvas" className="Canvas" />
            </div>
        );
    }
}

export default GameScreen;