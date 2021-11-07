import {Link} from 'react-router-dom';
import React from "react";

export default function Nav() {
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to={{pathname: `/main`}}>Домой</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to={{pathname: `/my-urls/`}} className="dropdown-item">My urls<span
                                    className="sr-only"> </span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={{pathname: `/main/add`}} className="dropdown-item">Добавить запись<span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={{pathname: `/main/update`}} className="dropdown-item">Обновить запись<span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={{pathname: `/main/find`}} className="dropdown-item">Найти подстроку<span
                                    className="sr-only">(current)</span></Link>
                            </li>


                        </ul>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Зарегистрироваться
                            </button>
                    </form>
                </nav>
            </div>
        );
}