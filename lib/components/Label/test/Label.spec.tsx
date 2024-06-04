import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Label } from "../index";

describe("Label", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders label with default styles", () => {
    render(<Label label="Test Label" />);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveProperty("className", "block text-gray-800");

    expect(labelElement.innerHTML).toBe("Test Label");
  });

  test("renders label with custom className", () => {
    render(<Label label="Test Label" className="custom-class" />);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveProperty("className", "custom-class");
  });

  test("renders label with custom id", () => {
    render(<Label label="Test Label" id="test-id" />);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveProperty("htmlFor", "test-id");
  });
});
