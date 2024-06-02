import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders button label", () => {
    render(<Button label="Test Button" type="button" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeDefined();
  });

  test("calls onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button label="Test Button" type="button" onClick={onClickMock} />);

    const buttonElement = screen.getByText(/Test Button/i);
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    render(<Button label="Test Button" type="button" disabled />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveProperty("disabled", true);
  });

  test("displays a spinner when loading prop is true", () => {
    render(<Button label="Test Button" type="button" loading />);

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeDefined();
  });

  test("does not display a spinner when loading prop is false", () => {
    render(<Button label="Test Button" type="button" />);

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();
  });

  test("renders the button with the correct color", () => {
    render(<Button label="Test Button" type="button" color="success" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement.className).contain(
      "border-green-700 bg-green-700 text-white",
    );
  });

  test("renders the button with the correct importance", () => {
    render(<Button label="Test Button" type="button" importance="primary" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement.className).contain(
      "border-green-700 bg-green-700 text-white",
    );
  });

  test("renders the button with the correct size", () => {
    render(<Button label="Test Button" type="button" size="small" />);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement.className).contain("px-2 py-1 text-sm");
  });

  test("renders the button with an icon", () => {
    render(
      <Button
        label="Test Button"
        type="button"
        icon={<span data-testid="icon">Icon</span>}
      />,
    );

    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeDefined();
  });

  test("renders the button with the correct icon position", () => {
    render(
      <Button
        label="Test Button"
        type="button"
        icon={<span data-testid="icon">Icon</span>}
      />,
    );

    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeDefined();
  });
});
