import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tab: 0 };
        this.contentObj = {0: "unselected", 1:"first tab", 2:"second tab", 3: "Third Tab"}
    }

    render () {
        return (
            <div class="tabs-div">
                <ul class="tabs-ul">
                    <li id="1" onClick={this.clickHandler.bind(this)}>one</li>
                    <li id="2" onClick={this.clickHandler.bind(this)}>two</li>
                    <li id="3" onClick={this.clickHandler.bind(this)}>three</li>
                </ul>
                <article class="article">
                    <li>{this.contentObj[(this.state.tab)]}</li>
                </article>
            </div>
        )
    }

    clickHandler (event) {
        let tabNum = event.currentTarget.id
        this.setState({ tab: parseInt(tabNum) });
    }
}

export default Tabs;