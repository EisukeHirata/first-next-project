/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import About from "src/pages/aboutttt";

describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
