import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Root from './root';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
	const main = document.getElementById("main");
	ReactDOM.render(<Root/>, main);
});
