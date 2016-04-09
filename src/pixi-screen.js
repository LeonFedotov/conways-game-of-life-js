import {Stage, Container} from 'react-pixi';
import React, {Component} from 'react';
import PIXI from 'pixi.js';

export default class PixiScreen extends Component {
    state = {
        board: this.props.board
    }
    stage = (ref) => {
        this.stage = ref;
        this.updateStage();
    }
    updateStage = () => {
        if(this.stage) {
            const graphics = new PIXI.Graphics();
            graphics.beginFill(0xFFFFFF, 1);
            graphics.drawRect(0, 0, this.props.width, this.props.height);
            graphics.endFill();
            graphics.beginFill(0xB4D455, 1);
            this.state.board.forEach(
                (row, y) =>
                    row.forEach(
                        (col, x) => col && graphics.drawRoundedRect(x * 20, y * 20, 10, 10, 5)
                    )
            )
            graphics.endFill();
            ref._displayObject.addChild(graphics);
        }
    }
    render() {
        this.updateStage()
        return (
            <Stage ref={this.stage} width={this.props.width} height={this.props.height}/>
        );
    }
}
