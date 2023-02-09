import { screen, render } from "@testing-library/react";
import { Character } from "./character";

describe("Given the Character function", () => {
  describe("When it is rendered", () => {
    test("Then it should appear on the screen", () => {
      render(<Character></Character>);
      const element = screen.getByText(/Joffrey/i);
      expect(element).toBeInTheDocument();
    });
  });
});
