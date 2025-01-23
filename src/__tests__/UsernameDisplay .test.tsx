import { describe, it, test } from "vitest";
import { render } from "@testing-library/react";
import UsernameDisplay from "../components/UsernameDisplay";
describe("UsernameDispay", () => {
  it("should render username", () => {
   render( <UsernameDisplay />);
  });
});
