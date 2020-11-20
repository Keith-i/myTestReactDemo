// import logo from './logo.svg';
import './App.css';
import MyCom from './components/myCom'
import { Button } from 'antd'
import ParentCom from './components/ParentCom'
import Judge from './components/judge'
import AjaxDemoCom from './components/AjaxDemoCom'
import ComLife from './components/ComLife'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComLife test='sss' />
        <AjaxDemoCom />
        <Judge />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <MyCom name="小明" age="18" />
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
        <ParentCom />
      </header>
    </div>
  );
}

export default App;
