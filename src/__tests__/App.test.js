import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the App container and main sections", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
