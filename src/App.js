//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { gapi } from "gapi-script";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId:
        "719570734778-8isis2eeaercovc07tdbhrues075hond.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/posts" />}
          ></Route>
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          ></Route>
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
