import React from 'react';
import {Card, CardBody, CardHeader} from "reactstrap";

const Comment = ({comment}) => {
    return (
        <Card>
            <CardHeader>{comment.name}</CardHeader>
            <CardBody>{comment.body}</CardBody>
        </Card>
    )
};

export default Comment;