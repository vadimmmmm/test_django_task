import {Link, Redirect} from 'react-router-dom';
import React from "react";
import Context from "./Context";

export default function Nav() {
    const {token, setToken, userName, setGlobalUserName, cookies} = React.useContext(Context);
    const [redirect, setRedirect] = React.useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {userName && <Link className="navbar-brand" to={{pathname: `/`}}>{userName}</Link>}
                {!userName && <Link className="navbar-brand" to={{pathname: `/`}}>Home</Link>}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            {token && <Link to={{pathname: `/my-urls/`}} className="dropdown-item">My urls<span
                                className="sr-only"> </span></Link>}
                            {!token &&
                            <Link to={{pathname: `/my-urls/`}} className="dropdown-item disabled">My urls<span
                                className="sr-only"> </span></Link>}
                        </li>
                        <li className="nav-item active">
                            {token && <Link to={{pathname: `/add-url/`}} className="dropdown-item">Add url<span
                                className="sr-only"> </span></Link>}
                            {!token &&
                            <Link to={{pathname: `/add-url/`}} className="dropdown-item disabled">Add url<span
                                className="sr-only"> </span></Link>}
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    {!localStorage.getItem('access') && <Link to={{pathname: `/`}}>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login
                        </button>
                    </Link>}

                    {localStorage.getItem('access') &&
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => {
                        setToken('');
                        setGlobalUserName('');
                        localStorage.removeItem('access')
                        setRedirect(true);
                    }}>Exit
                    </button>}
                </form>
            </nav>
        </div>
    );
}