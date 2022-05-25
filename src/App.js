//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import {gapi} from "gapi-script";

const App = () => {
  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId:
        "719570734778-8isis2eeaercovc07tdbhrues075hond.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
