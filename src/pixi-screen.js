import React from 'react';
import {Stage, Text} from 'react-pixi';
import PIXI from 'pixi.js';

export default function PixiScreen(props) {
    const fontstyle = {font: '40px sans-serif'};
    return (
        <Stage width={props.width} height={props.height}>
            <Text text="Vector text" x={5} y={10} style={fontstyle} anchor={new PIXI.Point(0.5,0)} key="2" />
        </Stage>
    );
}