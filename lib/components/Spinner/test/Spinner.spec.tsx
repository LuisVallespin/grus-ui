import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Spinner } from "../index";

describe("Spinner", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the spinner", () => {
    render(<Spinner />);
    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeDefined();
  });

  test("renders the spinner with default styles", () => {
    render(<Spinner />);
    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement?.style).contain({
      height: "20px",
      width: "20px",
      borderWidth: "2px",
      borderLeftColor: "#09f",
    });
  });

  test("renders the spinner with custom styles", () => {
    render(<Spinner size="30px" borderWidth="3px" color="red" />);
    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement?.style).contain({
      height: "30px",
      width: "30px",
      borderWidth: "3px",
      borderLeftColor: "red",
    });
  });
});
