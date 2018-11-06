import React from 'react'

export default (props) => {
    return (
        <ul>
            <li> - <b>First Name:</b> {props.client.firstName} </li>
            <li> - <b>Last Name:</b>  {props.client.lastName}</li>
            <li> - <b>Id:</b>   {props.client.client_id}</li>
        </ul>
    )
}
