import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { salesImageProps } from "./sales-media";

describe("Spanish performance overrides are opt-in", () => {
  it("keeps Brazilian images unchanged without Spanish configuration", () => {
    assert.deepEqual(salesImageProps({ url: "/original.png" }), { src: "/original.png" });
  });

  it("uses the Spanish responsive image only for its matching original", () => {
    const media = {
      "/original.png": { src: "/fast.webp", srcSet: "/small.webp 640w, /fast.webp 1280w", width: 1280, height: 960 },
    };
    assert.deepEqual(salesImageProps({ url: "/original.png" }, media, "100vw"), {
      src: "/fast.webp", srcSet: "/small.webp 640w, /fast.webp 1280w",
      width: 1280, height: 960, sizes: "100vw", decoding: "async",
    });
    assert.deepEqual(salesImageProps({ url: "/unrelated.png" }, media), { src: "/unrelated.png" });
  });
});