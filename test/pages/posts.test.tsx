/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Posts from "src/pages/posts";

describe("Posts page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Posts />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
