import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, Footer } from "./components";
import { Crypto, Exchanges, Homepage, CryptoDetails, News } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
