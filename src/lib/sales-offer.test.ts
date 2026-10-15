import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { getClassicOffer } from "./sales-offer";

describe("default international offer", () => {
  test("Portuguese default retains the Spanish Hotmart checkout", () => {
    assert.equal(getClassicOffer("pt", true).checkoutUrl, "https://pay.hotmart.com/R107917706S?checkoutMode=10");
    assert.equal(getClassicOffer("pt", true).checkoutUrl, getClassicOffer("es").checkoutUrl);
  });
  test("Portuguese default retains all eight international benefits", () => {
    assert.equal(getClassicOffer("pt", true).benefits.length, 8);
  });
  test("Portuguese international offer disables domestic upgrade and video behavior", () => {
    assert.equal(getClassicOffer("pt", true).international, true);
  });
  test("other Brazilian variants keep their domestic checkout and offer", () => {
    assert.equal(getClassicOffer("pt").checkoutUrl, "https://pay.wiapy.com/xKa8OJCEivJ");
    assert.equal(getClassicOffer("pt").international, false);
    assert.equal(getClassicOffer("pt").benefits.length, 4);
  });
});