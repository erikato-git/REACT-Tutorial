import logo from './logo.svg';
import './App.css';
import Body, {Body2} from './components/Body';


function App() {
//  const add = (a,b) => a + b;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p style={{color: "blue"}}>
          <Body title="Body1 Title" 
//                  number={add}
                  number={(a,b) => a + b}
                  myObj={{
                    a: 5,
                    b: 6
                  }}
          />
          <Body2 />
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
