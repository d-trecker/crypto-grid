import logo from "./logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import { Crypto, Exchanges, Homepage, CryptoDetails, News } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/crypto">
                <Crypto />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
}

export default App;
