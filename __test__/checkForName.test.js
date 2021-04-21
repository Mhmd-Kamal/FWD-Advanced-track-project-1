import { checkForName } from "../src/client/js/nameChecker";

describe("testing name checker functionality", () => {
  test("testing checkForName function", () => {
    const name = "Picard";

    expect(checkForName(name)).toMatch("Welcome, Captain!");
  });
});
