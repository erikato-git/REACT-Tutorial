import './App.css';
import React from "react";
import FETCH_RANDAOM_USER from './components/Fetch_Random_User';
// import STATE_COMPONENT from './components/State_Component';

class App extends React.Component {
  
  state = { 
    visible: true
  }

  handleVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
    console.log(this.state)
  }

  render(){
    return(
      <div className="App">
        < FETCH_RANDAOM_USER/>
        {/* < STATE_COMPONENT /> */}
      </div>
    );
  }

}


export default App;
