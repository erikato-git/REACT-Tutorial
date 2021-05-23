//import logo from './logo.svg';
import './App.css';
// import Body, {Body2} from './components/Body';
// import Counter from './components/State_Component';
import ImageSlider from './components/ImageSlider';
import React from "react";

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
    const buttonText = this.state.visible ? "Hide" : "Show";

    return(
      <div className="App">
        {this.state.visible ? <ImageSlider /> : null}
        <button onClick={this.handleVisible}>{buttonText}</button>
      </div>
    );
  }



}



/*
function App() {
//  const add = (a,b) => a + b;

  state = { 
    visible: true
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p style={{color: "white"}}>
          <Body title="Body1 Title" 
//                  number={add}
                  number={(a,b) => a + b}
                  myObj={{
                    a: 5,
                    b: 6
                  }}
          />
          <Body2 />
          <Counter />
          {this.state.visible ? <ImageSlider /> : null}
          </p>
        </div>

      </header>
    </div>
  );
}
*/

export default App;
