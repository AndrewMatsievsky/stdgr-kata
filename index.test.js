const aggregateProduct = require("./index");

const firstLayer = {
  title: "Red pants",
  description:
    "Red pants are highly addictive, and made out of awesome stuff only!",
};

const secondLayer = {
  title: "Red pants from manufacturor title",
  tags: ["red", "pants", "awesome"],
  images: [
    { src: "https://picsum.photos/200" },
    { src: "https://picsum.photos/350" },
  ],
};

const thirdLayer = {
  description: "Red pants unique description",
};

describe("aggregateProduct", () => {
  it("should merge layers properly", () => {
    const actualResult = aggregateProduct([
      firstLayer,
      secondLayer,
      thirdLayer,
    ]);

    expect(actualResult.title).toBe(firstLayer.title);
    expect(actualResult.description).toBe(thirdLayer.description);
    expect(actualResult.images).toBe(secondLayer.images);
    expect(actualResult.tags).toBe(secondLayer.tags);
  });
});
