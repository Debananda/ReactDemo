import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export default function UserDetails({ user }) {
  return user ? (
    <Card>
      <CardHeader>{user.name}</CardHeader>
      <CardBody>
        <p id={"email"}>Email : {user.email}</p>
        <p id={"phone"}>Phone : {user.phone}</p>
        <address>
          {`Address : ${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}
        </address>
      </CardBody>
    </Card>
  ) : null;
}
