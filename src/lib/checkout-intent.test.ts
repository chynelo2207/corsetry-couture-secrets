import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
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
    assert.equal(prevented, true);
    assert.equal(propagated, false);
    assert.equal(target, "#comprar");
  });

  it("opening the upgrade offer does not propagate a checkout click", () => {
    let propagated = true;
    let upgradeOpen = false;
    captureLocalOfferAction({
      preventDefault: () => {},
      stopPropagation: () => { propagated = false; },
    }, () => { upgradeOpen = true; });
    assert.equal(propagated, false);
    assert.equal(upgradeOpen, true);
  });
});