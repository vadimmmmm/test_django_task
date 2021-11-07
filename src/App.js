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

function App() {
    const cookies = new Cookies();
    return (

        <div>
            <Context.Provider value={{cookies}}>
                <Router>
                    <Nav/>
                    <Route path="/" component={Auth}/>
                    <Route path="/my-urls/" component={GetInfo}/>
                </Router>
            </Context.Provider>
        </div>
    );
}

export default App;
