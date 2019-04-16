import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../Header";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../../../AppRoutes";
import About from "../../About";
import TestRenderer from "react-test-renderer";

describe("header component testing", () => {
  test("shall have correct snapShot", () => {
    const component = TestRenderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("shall render  without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Header />
        <AppRoutes />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  test("shall render  about component on about link click", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
        <AppRoutes />
      </MemoryRouter>
    );
    // console.log(wrapper.debug());
    wrapper
      .find(Header)
      .find("[href='/about']")
      .simulate("click", { button: 0 });
    expect(wrapper.find(About)).toHaveLength(1);
  });
});
