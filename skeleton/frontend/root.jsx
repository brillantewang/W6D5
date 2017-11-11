import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class Root extends React.Component{
	render(){
		return ( 
			<div class="root">
				<Clock/>
				<Tabs/>
				<Weather/>
			</div>
		);
	}
}

export default Root; 