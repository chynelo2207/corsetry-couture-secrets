import { describe, expect, test } from "bun:test";
import { getClassicOffer } from "./sales-offer";

describe("default international offer", () => {
  test("Portuguese default retains the Spanish Hotmart checkout", () => {
    expect(getClassicOffer("pt", true).checkoutUrl).toBe("https://pay.hotmart.com/R107917706S?checkoutMode=10");
    expect(getClassicOffer("pt", true).checkoutUrl).toBe(getClassicOffer("es").checkoutUrl);
  });
  test("Portuguese default retains all eight international benefits", () => {
    expect(getClassicOffer("pt", true).benefits).toHaveLength(8);
  });
  test("Portuguese international offer disables domestic upgrade and video behavior", () => {
    expect(getClassicOffer("pt", true).international).toBe(true);
  });
  test("other Brazilian variants keep their domestic checkout and offer", () => {
    expect(getClassicOffer("pt").checkoutUrl).toBe("https://pay.wiapy.com/xKa8OJCEivJ");
    expect(getClassicOffer("pt").international).toBe(false);
    expect(getClassicOffer("pt").benefits).toHaveLength(4);
  });
});