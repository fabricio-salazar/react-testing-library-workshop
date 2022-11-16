import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../utils/testUtils";
import { CountriesDashboard } from "./CountriesDashboard.component";

describe("CountriesDashboard Tests", () => {
  const setup = () => ({
    user: userEvent.setup(),
    ...renderWithProviders(<CountriesDashboard />)
  });

  describe("Title Tests", () => {
    it("should render the title | case insensitive", () => {
      setup();

      const title = screen.getByRole("heading", {
        name: /react testing library 101/i
      });

      expect(title).toBeInTheDocument();
    });

    it("should render the title | case sensitive", () => {
      setup();

      const title = screen.getByRole("heading", {
        name: /React Testing Library 101/
      });

      expect(title).toBeInTheDocument();
    });

    it("should render the title | substring match", () => {
      setup();

      const title = screen.getByRole("heading", {
        name: /library 101/i
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("Integration Tests", () => {
    it("should filter the countries by continent", async () => {
      const { user } = setup();

      const continentsSelectBtn = screen.getByRole("button", {
        name: /filter by continent/i
      });

      await user.click(continentsSelectBtn);

      const europeOption = screen.getByRole("option", {
        name: /europe/i
      });

      await user.click(europeOption);

      const continentCells = screen.getAllByTestId("cell-continent");

      continentCells.forEach((cell) => {
        expect(cell).toHaveTextContent("Europe");
      });
    });
  });
});
