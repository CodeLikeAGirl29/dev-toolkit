/*
Stateful Component

    Internal State
    Component Lifecycle Hooks

Useful when...

    We need to have an internal state
    We need to perform an action when the component is mounted

    When you need internal state
        D3 graph
    When you need to utilize a Component Lifecycle hook
        Ajax request on mount
            Setup animations
            Access the raw DOM node for a 3rd party library

*/


import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { isLiked: false };
    }

    componentDidMount() {
        console.log('Stateful component successfully mounted.');
    }

    _toggleLikeState = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        const { name } = this.props;
        const { isLiked } = this.state;

        return (
            <div>
            <h3>{ name }</h3>
            <span>{ isLiked ? 👍 : 👎 }</span>
            <button onClick={ this._toggleLikeState }>
            Toggle Like
            </button>
            </div>
        );
    }
}


HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<Profile name="Alice" />, mountNode);


/*
Stateless Components

    Super simple
    Given some state (as props)... return some DOM (or additional components)
    Pure
Useful 95% of the time
*/
import React from 'react';

function HelloMessage({ name }) {
    return(
        <div>Hello {name}</div>
    );
};

HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<HelloMessage name="Alice" />, mountNode);
