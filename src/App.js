import logo from './logo.svg';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          {/* <div className="routes">
           
          </div> */}
        </Layout>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
}

export default App;
