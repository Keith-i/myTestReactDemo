import logo from './logo.svg';
import './App.css';
import MyCom from './components/myCom'
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCom name="小明" />
        <MyCom name="小红" />
        <Button type="primary">Button</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
