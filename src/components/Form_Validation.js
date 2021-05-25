import React from "react";

export default class Form_Validation extends React.Component{

    state = {
        username: "",
        password: ""
    }

    handlerUsername = (e) => {
        this.setState({
            username: e.target.value
        })
        console.log("username: "+this.state.username)
    }

    handlerPassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log("password: "+this.state.password)
    }


    render(){
        return(
            <div>
                // TODO: Submit button failed
                <input type="text" placeholder="username" onChange={this.handlerUsername}/>
                <input type="text" placeholder="password" onChange={this.handlerPassword}/>
                <input type="text" placeholder="confirm password" onChange={this.handlerPassword}/>
            </div>
        );
    }
}