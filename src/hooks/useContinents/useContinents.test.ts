import { waitFor } from "@testing-library/react";

import { renderHookWithProviders } from "../../utils/testUtils";
import { useContinents } from "./useContinents.hook";

describe("useContinents Tests", () => {
  const setup = () => renderHookWithProviders(useContinents);

  it("should return the expected error and loading values", async () => {
    const { result } = setup();

    expect(result.current.continentsError).toBe(undefined);
    expect(result.current.loadingContinents).toBe(true);

    await waitFor(() => {
      expect(result.current.loadingContinents).toBe(false);
    });
  });
});
