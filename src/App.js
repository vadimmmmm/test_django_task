import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Route,

    BrowserRouter as Router,
} from "react-router-dom"
import Auth from "./views/Auth";
import Nav from "./views/Nav";


function App() {
    return (
        <div>
            <Router>

                    <Nav/>
                    <Route path="/" component={Auth} />
            </Router>
        </div>
    );
}

export default App;
