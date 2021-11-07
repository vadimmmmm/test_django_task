import React from "react";
import axios from "axios";
import Context from "./Context";
import {Redirect} from "react-router-dom";

export default function GetInfo({match}) {
    const {cookies} = React.useContext(Context);
    const [info, setInfo] = React.useState([])

    React.useEffect(() => {
        axios({
            method: 'GET',
            url: `http://0.0.0.0:8000/api/v1/url/`,
            headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
        }).then(response => {
            setInfo(response.data)
        })
    }, [])

    if (!localStorage.getItem('access')){
        return <Redirect to={'/'}/>
    }

    return (
        <div>
            <center>
                <table className="simple-little-table">

                    <tr>
                        <th>Url</th>
                    </tr>
                    {info.map(dict => (
                        <tr>
                            <td><a href={dict.generated_url} target="_blank">{dict.generated_url}</a></td>
                        </tr>
                    ))}

                </table>
            </center>
        </div>
    )
}