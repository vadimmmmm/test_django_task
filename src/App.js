import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom"
import Auth from "./views/Auth";
import Nav from "./views/Nav";
import GetInfo from "./views/Urls";
import Cookies from "universal-cookie";
import Context from "./views/Context";
import CreateUrl from "./views/CreateUrl";
import Registration from "./views/Registration";
import React from "react";

function App() {

    const cookies = new Cookies();
    const [token, setToken] = new React.useState('');
    const [userName, setGlobalUserName] = new React.useState('');
    return (

        <div>
            <Context.Provider value={{cookies, token, setToken, userName, setGlobalUserName}}>
                <Router>
                    <Nav/>
                    <Route path="/" exact component={Auth}/>
                    <Route path="/my-urls/" component={GetInfo}/>
                    <Route path="/add-url/" component={CreateUrl}/>
                    <Route path="/registration/" component={Registration}/>
                </Router>
            </Context.Provider>
        </div>
    );
}

export default App;
