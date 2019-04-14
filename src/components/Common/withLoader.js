import React from "react";
import Loader from "./Loader";

export default function withLoader(WrappedComponent) {
    return class extends React.Component {
        render() {
            if (this.props.loading) return <Loader show={true}/>;
            return <WrappedComponent {...this.props} />;
        }
    }
    // return function withLoadingComponent({isLoading, ...props}) {
    //     if (isLoading) {
    //         return <Loader show={true}/>;
    //     }
    //     return <WrappedComponent {...props} />;
    // };
}
