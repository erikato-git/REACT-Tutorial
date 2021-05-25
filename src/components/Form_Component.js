import React from "react";

export default class Form_Component extends React.Component{

    state = {
        name: ""
    };

    handleInput = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    
    
    render() {
        console.log(this.state.name);
        return(
            <div>
                <input onChange={this.handleInput}/>
            </div>
        );
    }

}