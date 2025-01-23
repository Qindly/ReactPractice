import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render user", () => {
    const {container}= render(<App />);
    expect(container).toMatchSnapshot();
  });
});
