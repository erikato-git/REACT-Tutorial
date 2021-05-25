import React from "react";

export default class Fetch_Random_User extends React.Component{

    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=10";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            loading: false,
            people: data.results
        })
        this.state.people.forEach(e => {
            console.log(e)
        })
        console.log(this.state.people.length)
    }



    render(){
        if(this.state.loading){
            return <div>loading...</div>
        }

        if(this.state.people.length < 1){
            return <div>No people found!</div>
        }

        return (
            <div>
                {this.state.people.map(person => (
                <div key={person.name.first + person.name.last}>
                    <div>{person.name.title}</div>
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                    <img src={person.picture.large} />
                </div>
                ))}
            </div>
        )
    }
}