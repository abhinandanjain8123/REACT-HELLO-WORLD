import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onIncrement() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }
    onIncrementFive() {
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.onIncrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter