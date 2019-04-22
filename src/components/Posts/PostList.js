import React, {Component, Fragment} from "react";
import {Dialog} from 'primereact/dialog';
import Post from "./Post";
import UserDetails from "./UserDetails";
import withLoader from "../Common/withLoader";
import {connect} from "react-redux";
import {loadAllPosts, selectUser} from "../../store/actions/PostActions";
import {ScrollPanel} from "primereact/scrollpanel";

class PostList extends Component {
    state = {
        userDetails: {},
        modal: false
    };

    componentDidMount() {
        this.props.loadAllPosts();
    }

    componentDidUpdate = prevProps => {
        if (this.props.userDetails !== prevProps.userDetails) {
            this.setState({
                modal: Object.keys(this.props.userDetails || {}).length > 0
            });
        }
    };
    getUserDetails = userId => {
        this.props.selectUser(userId);
    };
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        return (
            <Fragment>
                <ScrollPanel style={{width: '100%', height: '90vh'}}>
                    <div className={"p-grid"}>
                        {this.props.posts &&
                        this.props.posts.map(post => (
                            <div className={"p-col-6 p-md-3"} key={post.id}>
                                <Post post={post} getUserDetails={this.getUserDetails}/>
                            </div>
                        ))}
                    </div>
                </ScrollPanel>
                <Dialog header={"User Details"} visible={this.state.modal} onHide={this.toggle}>
                    <UserDetails user={this.props.userDetails}/>
                </Dialog>
            </Fragment>
        );
    }
}

export default withLoader(
    connect(
        state => ({posts: state.post.posts, loading: state.post.loading, userDetails: state.post.userDetails}),
        {
            loadAllPosts,
            selectUser
        }
    )(PostList)
);
