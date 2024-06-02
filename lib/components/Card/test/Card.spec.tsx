import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Card } from "../index";

describe("Card", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders card with default styles", () => {
    render(
      <Card>
        <div>Hello World!</div>
      </Card>,
    );

    const cardElement = screen.getByText(/Hello World!/i).parentElement;
    expect(cardElement).toHaveProperty(
      "className",
      "rounded border border-gray-300 bg-white p-6 shadow-sm",
    );
  });

  test("renders card children", () => {
    render(
      <Card>
        <div>Hello World!</div>
      </Card>,
    );

    const cardContent = screen.getByText(/Hello World!/i);
    expect(cardContent).toBeDefined();
  });
});
