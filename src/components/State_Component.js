import React from "react";

export default class Counter extends React.Component{
  
    state = {
        count: 0
    }

    btnIncCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state)
    }

    btnDecCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <div>count: {this.state.count}</div>
                    <button onClick={this.btnIncCounter}>Increment</button>
                    <button onClick={this.btnDecCounter}>Decrement</button>
            </div>
        );
    };
}