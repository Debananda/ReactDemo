import React from "react";
import Loader from "./Loader";

export default function withLoader(WrappedComponent) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <Loader show={true} />;
    }
    return <WrappedComponent {...props} />;
  };
}
