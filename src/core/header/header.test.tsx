import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given header component", () => {
  describe("When it is rendered", () => {
    test("it should appear in screen", () => {
      render(<Header></Header>);
      const element = screen.getByText(/thrones/i);
      expect(element).toBeInTheDocument();
    });
  });
});
