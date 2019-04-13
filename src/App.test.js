import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import NotFound from "./components/Common/NotFound";
import AppRoutes from "./AppRoutes";
import About from "./components/About";

describe("App testing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("render home page on url change", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
  it("render about page on url change", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });
  it("render not found page on url change", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(About)).toHaveLength(0);
  });
});
