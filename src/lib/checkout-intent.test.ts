import { describe, expect, it } from "bun:test";
import { captureLocalOfferAction } from "./checkout-intent";

describe("local offer actions are not checkout initiation", () => {
  it("blocks pixel click propagation while scrolling to the price", () => {
    let prevented = false;
    let propagated = true;
    let target = "";
    captureLocalOfferAction({
      preventDefault: () => { prevented = true; },
      stopPropagation: () => { propagated = false; },
    }, () => { target = "#comprar"; });
    expect(prevented).toBe(true);
    expect(propagated).toBe(false);
    expect(target).toBe("#comprar");
  });

  it("opening the upgrade offer does not propagate a checkout click", () => {
    let propagated = true;
    let upgradeOpen = false;
    captureLocalOfferAction({
      preventDefault: () => {},
      stopPropagation: () => { propagated = false; },
    }, () => { upgradeOpen = true; });
    expect(propagated).toBe(false);
    expect(upgradeOpen).toBe(true);
  });
});