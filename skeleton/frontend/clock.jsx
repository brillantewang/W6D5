import React from 'react';

class Clock extends React.Component{

	constructor(props){
		super(props);
		this.state = {time: new Date()};
		this.handle = null;
	}

	render(){
  		return (
			<div class="clock-div">	
				<h1 class="clock">Time: {this.timeString()}</h1>
				<h1 class="clock">Date: {this.dateString()}</h1>
			</div>
			)
	}

	tick(){
		this.setState({ time: new Date() });
	}

	componentDidMount() {
		this.handle = setInterval(this.tick.bind(this), 1000);

	}

	componentWillUnmount() {
		clearInterval(this.handle);
	}

	timeString() {
		let hours = this.state.time.getHours();
		let minutes = this.state.time.getMinutes();
		let seconds = this.state.time.getSeconds();

		return `${hours}:${minutes}:${seconds}`
	}

	dateString(){
		return this.state.time.toDateString();
	}
}

export default Clock; 