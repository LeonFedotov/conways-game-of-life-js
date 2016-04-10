import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Life from './conway';
import Screen from './art-screen';

class LifeGame extends Component {
	timeout = 500
	state = {
		board: this.props.life.board
	}

	next = () => {
		this.setState({board: this.props.life.next().board });
	}


	start = () => {
		this.tick = () => {
          		this.next()
          		this.tick && requestAnimationFrame(this.tick);
        	};
        	this.tick();
	}
	stop = () => { this.tick = undefined; }
	set = ({x, y}) => this.setState({
		board: this.props.life.setValue({x, y, value: this.props.life.getCoord({x, y}) ? 0 : 1}).board
	})
	random = () => {
		this.setState({board: this.props.life.fill({func: () => parseInt(Math.random() * 10, 10) % 2}).board})
	}
	clear = () => {
		this.setState({ board: this.props.life.fill({}).board })
	}
	render() {
		return (
			<screen>
				<menu>
					<button onClick={this.clear}>clear</button>
					<button onClick={this.random}>random</button>
					<button onClick={this.next}>next gen</button>
					<button onClick={this.start}>start</button>
					<button onClick={this.stop}>stop</button>
				</menu>
				<Screen width="1000" height="1000" board={this.state.board} set={this.set}/>
			</screen>

		);
	}
	static defaultProps = {
		life: new Life({
			size: 50,
			func: () => parseInt(Math.random() * 10, 10) % 2
		})
	}
}

ReactDOM.render(<LifeGame />, document.body);
