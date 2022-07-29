import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Pomodoro from "./Pomodoro.js"
import Header from "./Header";
import Home from "./Home";
import { useEffect } from "react";
import { getUserAuth } from "../action";
import { connect } from "react-redux";
import Form from "./Form";
import './App.css';
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Header />
            <Home />
          </Route>
          <Route path="/timer">
            <Header />
            <Pomodoro/>
          </Route>

          <Route path="/list">
           <Header />
           
           <div className="wrapper">
           <Form />
           </div>
            

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
