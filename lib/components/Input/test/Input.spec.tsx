import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Input } from "../index";

describe("Input", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders input with default styles", () => {
    render(<Input value="Hello, World!" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty(
      "className",
      "rounded border border-gray-300 bg-gray-50 p-2 text-gray-800 shadow-sm",
    );
  });

  test("renders input with label", () => {
    render(<Input value="Hello, World!" label="Label" />);

    const labelElement = screen.getByTestId("label");
    expect(labelElement.innerHTML).toBe("Label");
  });

  test("renders input with placeholder", () => {
    render(<Input value="Hello, World!" placeholder="Placeholder" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty("placeholder", "Placeholder");
  });

  test("renders input with type", () => {
    render(<Input value="Hello, World!" type="password" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty("type", "password");
  });

  test("renders input with id", () => {
    render(<Input value="Hello, World!" id="test" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty("id", "test");
  });

  test("renders input with name", () => {
    render(<Input value="Hello, World!" name="test" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty("name", "test");
  });

  test("renders input with value", () => {
    render(<Input value="Hello, World!" />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement).toHaveProperty("value", "Hello, World!");
  });

  test("calls onChange with new value", () => {
    const onChange = vi.fn();
    render(<Input value="Hello, World!" onChange={onChange} />);

    const inputElement = screen.getByTestId("input");
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalledWith(newValue);
  });
});
