import React from 'react';
import {Card} from "primereact/card";

const Comment = ({comment}) => {
    return (
        <Card title={comment.name}>
            {comment.body}
        </Card>
    )
};

export default Comment;