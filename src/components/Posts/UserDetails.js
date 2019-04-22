import React from "react";
import {Card} from "primereact/card";

export default function UserDetails({user}) {
    return user ?
        (<Card title={user.name}>
            <p id={"email"}>Email : {user.email}</p>
            <p id={"phone"}>Phone : {user.phone}</p>
            <address>
                {`Address : ${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}
            </address>
        </Card>) : null
        ;
}
