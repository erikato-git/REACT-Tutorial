import logo from './logo.svg';
import './App.css';
import Body, {Body2} from './components/Body';
import Counter from './components/State_Component';


function App() {
//  const add = (a,b) => a + b;
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
          </p>
        </div>

      </header>
    </div>
  );
}

export default App;
