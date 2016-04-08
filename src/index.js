import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Life from './conway';
import PixiScreen from './pixi-screen';

class LifeGame extends Component {
	interval = false
	timeout = 500
	static defaultProps = {
		life: new Life({
			size: 40,
			func: () => parseInt(Math.random() * 10, 10) % 2
		})
	}

	state = {
		board: this.props.life.board
	}
	next = () => {
		this.setState({board: this.props.life.next().board });
	}
	timeoutChange = ({target}) => {
		this.stop();
		this.timeout = target.value;
	}

	start = (timeout = this.timeout) => {
		if(this.interval === false) {
			this.interval = setInterval(this.next, timeout);
		}
	}
	stop = () => { clearInterval(this.interval); this.interval = false;}
	set = (x, y) => this.setState({
		board: this.props.life.setValue({x, y, value: this.props.life.getCoord(x, y) ? 0 : 1}).board
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
					<button onClick={this.clear}>clssear</button>
					<button onClick={this.random}>random</button>
					<button onClick={this.next}>next gen</button>
					<button onClick={this.start}>start</button>
					<button onClick={this.stop}>stop</button>
					<input type="range" onChange={this.timeoutChange} defaultValue={this.timeout} min="100" step="1" max="1000" />
				</menu>
				<PixiScreen width="1000" height="1000" board={this.state.board} set={this.set}/>
			</screen>

		);
	}
}

ReactDOM.render(<LifeGame />, document.body);