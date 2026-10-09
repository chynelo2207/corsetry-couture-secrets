import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { loadWistia } from "./wistia-loader";

describe("Wistia loading on pages with a video", () => {
  it("adds the existing player and embed once even after repeated route transitions", () => {
    const scripts: { src: string; type: string; async: boolean }[] = [];
    const document = {
      querySelector: (selector: string) => scripts.find(script => selector.includes(script.src)),
      createElement: () => ({ src: "", type: "", async: false }),
      head: { appendChild: (script: { src: string; type: string; async: boolean }) => scripts.push(script) },
    } as unknown as Document;
    loadWistia(document);
    loadWistia(document);
    assert.deepEqual(scripts, [
      { src: "https://fast.wistia.com/player.js", type: "text/javascript", async: true },
      { src: "https://fast.wistia.com/embed/a5jnm5622k.js", type: "module", async: true },
    ]);
  });
});