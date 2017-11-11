import React from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = props.state;
        console.log(this.state);
    }

    render(){
        return (<li id="1" onClick={this.clickHandler.bind(this)}>one</li>
        <li id="2" onClick={this.state.clickHandler.bind(this)}>two</li>
        <li id="3" onClick={this.clickHandler.bind(this)}>three</li>);
    }
}