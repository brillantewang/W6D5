import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


class Root extends React.Component{
	render(){
		return ( 
			<div class="root">
				<Clock/>
				<Tabs/>
			</div>
		);
	}
}

export default Root; 