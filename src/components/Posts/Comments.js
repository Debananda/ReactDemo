import React, {Component, Fragment} from "react";
import {Button} from "primereact/button";
import Comment from "./Comment";
import {connect} from 'react-redux';
import {loadPostComments} from '../../store/actions/CommentActions';
import withLoader from "../Common/withLoader";

class Comments extends Component {
    state = {comments: []};

    componentDidMount() {
        const postId = Number.parseInt(this.props.match.params["id"]);
        this.props.loadPostComments(postId);
    }

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <Fragment>
                <div className="p-flex">
                    <h1>Comments</h1>
                    <Button color="link" id="btnGoBack" onClick={this.goBack} label={"Go Back"}/>
                </div>
                <div className={"p-grid p-flex"}>
                    {this.props.comments.map(comment => (
                        <div className={"p-col-6 p-md-3"} key={comment.id}>
                            <Comment comment={comment}/>
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default withLoader(connect(state => ({
    comments: state.comment.comments,
    loading: state.comment.loading
}), {loadPostComments})(Comments));
