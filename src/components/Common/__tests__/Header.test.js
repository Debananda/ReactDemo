import React from "react";
import { mount } from "enzyme";
import Header from "../Header";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../../../AppRoutes";
import About from "../../about";

describe("header component testing", () => {
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
    wrapper
      .find(Header)
      .find("[href='/about']")
      .simulate("click", { button: 0 });
    expect(wrapper.find(About)).toHaveLength(1);
  });
});
