import React, {Component} from 'react';
import {Stage, Container} from 'react-pixi';
import PIXI from 'pixi.js';

const SPEED = 0.005;
export default class PixiScreen extends Component {
    state = {
        board: this.props.board
    }
    stage(ref) {
        debugger;
        // const graphics = new PIXI.Graphics();
        // graphics.lineStyle(2, 0xFF00FF, 1);
        // graphics.drawRoundedRect(150, 450, 300, 100, 15);
        // graphics.endFill();

        // Stage.addChild(graphics);
    }
    render() {

        return (
            <Stage ref={this.stage} width={this.props.width} height={this.props.height}/>
        );
    }
}
