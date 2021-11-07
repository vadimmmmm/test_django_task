import React from "react";
import axios from 'axios';
import Context from "./Context";

export default function CreateUrl() {
    const {cookies} = React.useContext(Context);
    const [url, setUrl] = React.useState('');
    const [generatedUrl, setGeneratedUrl] = React.useState('');


    function changeUrl(e) {
        setUrl(e.target.value);
    }


    function onSubmit(e) {
        e.preventDefault();
        return axios.post(`http://0.0.0.0:8000/api/v1/url/`, {
                'real_url': url
            },
            {
                headers: {'Authorization': `Bearer ${cookies.get('access')}`}
            }).then(response => {
            if (response.status === 201) {
                setGeneratedUrl(response.data.generated_url);
            }
        });

    }


    return (
        <div className="container">
            <div className="row">

                <div className="col-md-offset-3 col-md-6">
                    <form className="form-horizontal" onSubmit={onSubmit}>
                        <span className="heading">Adding</span>
                        <div className="form-group">
                            <input type="login" className="form-control" id="inputEmail" placeholder="Enter your url"
                                   onChange={changeUrl} value={url}/>
                        </div>
                        <div className="form-group">
                            <input type="login" className="form-control" id="inputEmail"
                                   placeholder="Result will appear here"
                                   value={generatedUrl}/>
                        </div>
                        <div className="form-group">

                            <button type="submit">Get</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}