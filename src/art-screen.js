import React, {Component} from 'react';
import {
  Surface,
  Path,
  Group,
  Transform,
  Shape,
} from 'react-art';

const DOT = 'M31.5,17 C35.0898511,17 38,14.0898511 38,10.5 C38,6.91014895 35.0898511,4 31.5,4 C27.9101489,4 25,6.91014895 25,10.5 C25,14.0898511 27.9101489,17 31.5,17 Z M31.5,17';
export default class ArtScreen extends Component {
    state = {
        text: this.props.text
    }
    render() {
        return (
            <Surface width={this.props.width} height={this.props.height}>
                {this.props.board.map(
                    (row, y) =>
                        <Group key={`g${y}`}>
                            {row.map((col, x) =>
                                <Shape
                                    title={`${y}:${x}:${col}`}
                                    key={`${y}:${x}`}
                                    x={x*15}
                                    y={y*15}
                                    fill={col ? '#44da44' : '#eeeeee'}
                                    d={DOT}
                                    onClick={this.props.set.bind(null, {x, y})}
                                />
                            )}
                        </Group>
                )}
            </Surface>
        );
    }
}
