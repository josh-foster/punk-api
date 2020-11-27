import React from "react";
import { render } from "@testing-library/react";
import FilterList from "./FilterList";

describe("FilterList tests", () => {
  it("should render", () => {
    expect(render(<FilterList />)).toBeTruthy();
  });
});
