import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "../ErrorBoundary";

describe("Error Boundary Testing", () => {
  test("Error Boundary shall load properly", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <p>Everything looks good</p>
      </ErrorBoundary>
    );
    const child = wrapper.find("p");
    expect(child.exists()).toBeTruthy();
    expect(child.text()).toBe("Everything looks good");
  });
  test("Error Boundary shall load properly", () => {
    jest.spyOn(global.console, "error");
    const err = new Error("Testing Error");
    const wrapper = shallow(
      <ErrorBoundary>
        <p>Everything looks good</p>
      </ErrorBoundary>
    );
    wrapper.instance().componentDidCatch(err, "Testing Error Message");
    wrapper.update();
    const child = wrapper.find("p");
    expect(child.exists()).toBeFalsy();
    expect(wrapper.instance().state.hasError).toBeTruthy();
    expect(global.console.error).toBeCalledWith("Testing Error Message");
  });
  test("Error Boundary shall load properly on setting hasError to true", () => {
    jest.spyOn(global.console, "error");
    const err = new Error("Testing Error");
    const wrapper = shallow(
      <ErrorBoundary>
        <p>Everything looks good</p>
      </ErrorBoundary>
    );
    wrapper.setState({ hasError: true, err });
    wrapper.update();
    const child = wrapper.find("p");
    expect(child.exists()).toBeFalsy();
    expect(wrapper.instance().state.hasError).toBeTruthy();
    expect(global.console.error).toBeCalledWith("Testing Error Message");
  });
});
