import generateUniqueId from "../../utils/generateUniqueId";

describe("Generate Unique Id", () => {
  it("Should generate am unique id", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
