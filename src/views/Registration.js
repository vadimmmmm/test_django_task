import React from "react";
import axios from 'axios';
import {Redirect} from "react-router-dom";
import Context from "./Context";

export default function Registration(){
    const {cookies, setToken, setGlobalUserName} = React.useContext(Context);
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);


    function changeUserName(e){
        setUserName(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        return axios.post(`http://0.0.0.0:8000/api/v1/registration/`, {
            'user_name': userName,
            'password': password
        }).then(response => {
            if (response.status === 201){
                localStorage.setItem('access', response.data.access);
                setToken(response.data.access);
                setGlobalUserName(response.data.user_name);
                setRedirect(true);
            }
        });

    }

    if(redirect) {
        return <Redirect to={{pathname: `/add-url/`}}/>
    }

    return(
        <div className="container">
            <div className="row">

                <div className="col-md-offset-3 col-md-6">
                    <form className="form-horizontal" onSubmit={onSubmit}>
                        <span className="heading">Registration</span>
                        <div className="form-group">
                            <input type="login" className="form-control" id="inputEmail" placeholder="Login"
                                   onChange={changeUserName} value={userName}/>
                        </div>
                        <div className="form-group help">
                            <input type="password" className="form-control" id="inputPassword"
                                   placeholder="Password"
                                   onChange={changePassword} value={password}/>
                        </div>
                        <div className="form-group">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}