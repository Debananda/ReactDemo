import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Post from "../Post";

describe("Testing Post Component", () => {
  const dummyPost = {
    userId: 1,
    id: 1,
    title: "test title",
    body: "test body"
  };
  it("post shall render properly with all the data", () => {
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
    const wrapper = mount(
      <MemoryRouter>
        <Post post={dummyPost} getUserDetails={getUserDetailsMock} />
      </MemoryRouter>
    );
    const userDetailsBtn = wrapper.find(".btn").at(0);
    userDetailsBtn.simulate("click");
    expect(getUserDetailsMock.mock.calls.length).toBe(1);
    expect(getUserDetailsMock).toBeCalledWith(1);
  });
  it("shall route to comments properly", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/posts"]}>
        <Post post={dummyPost} />
      </MemoryRouter>
    );
    const commentsBtn = wrapper.find(".btn").at(1);
    commentsBtn.simulate("click");
    expect(wrapper.instance().history.location.pathname).toContain(
      "/1/comments"
    );
  });
});
