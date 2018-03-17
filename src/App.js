import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./ui/Header/Header";
import {Home} from "./ui/Home/Home";
import {About} from "./ui/About/About";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/about"} component={About}/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;


const NotFound = () => (
    <div>
        <h1>404</h1>
        <h2>Not Found</h2>
    </div>
);