import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Post from "../Post";

describe("Testing Post Component", () => {
  it("post shall render properly with all the data", () => {
    const dummyPost = {
      userId: 1,
      id: 1,
      title: "test title",
      body: "test body"
    };
    const wrapper = mount(
      <MemoryRouter>
        <Post post={dummyPost} />
      </MemoryRouter>
    );
    const header = wrapper.find(".card-header");
    expect(header.text()).toBe("test title");
    const body = wrapper.find(".card-body");
    expect(body.text()).toBe("test body");
  });
  it("shall call getUserDetails Properly", () => {
    const getUserDetailsMock = jest.fn();
    const dummyPost = {
      userId: 2,
      id: 1,
      title: "test title",
      body: "test body"
    };
    const wrapper = mount(
      <MemoryRouter>
        <Post post={dummyPost} getUserDetails={getUserDetailsMock} />
      </MemoryRouter>
    );
    const userDetailsBtn = wrapper.find(".btn").at(0);
    userDetailsBtn.simulate("click");
    expect(getUserDetailsMock.mock.calls.length).toBe(1);
    expect(getUserDetailsMock).toBeCalledWith(2);
  });
});
