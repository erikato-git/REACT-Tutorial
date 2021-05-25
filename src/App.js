import './App.css';
import React from "react";
import FORM_VALIDATION from './components/Form_Validation';

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
        <FORM_VALIDATION />
      </div>
    );
  }

}


export default App;
