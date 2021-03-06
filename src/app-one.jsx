import React from 'react';
import ReactDOM from 'react-dom';
import SharedSubComponent from './sharedSubComponent.jsx';

class ComponentOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        // This binding is necessarxy to make `this` work in the callback
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        this.setState({count: this.state.count+1});
    }

	render() {
        return (
            <div class="component">
    <h3>Component-One</h3>
    <div><button onClick={this.addOne}>Click to add Count</button>&nbsp;-&nbsp;{this.state.count}</div>
    <SharedSubComponent></SharedSubComponent>
    </div>
        );
    }
}

var content = document.getElementById('component-one');

ReactDOM.render(<ComponentOne/>, content);

export default ComponentOne;