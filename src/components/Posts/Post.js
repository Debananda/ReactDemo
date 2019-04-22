import React, {Component} from "react";
import {Card} from "primereact/card";
import {Button} from 'primereact/button'
import {withRouter} from "react-router-dom";

class Post extends Component {
    handleUserClick = () => {
        this.props.getUserDetails(this.props.post.userId);
    };
    handleCommentClick = () => {
        this.props.history.push(
            `${this.props.match.url}/${this.props.post.id}/comments`
        );
    };

    render() {
        return (
            <Card title={this.props.post.title} footer={<div className={"p-grid"}>
                <div className="p-col-6">
                    <Button color="link" onClick={this.handleUserClick} label={"User Details"}/>
                </div>
                <div className="p-col-6">
                    <Button color="link" onClick={this.handleCommentClick} label={"Comments"}/>
                </div>
            </div>}>
                {this.props.post.body}
            </Card>
        );
    }
}

export default withRouter(Post);
