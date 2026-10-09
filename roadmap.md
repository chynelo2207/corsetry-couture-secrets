# Spanish page performance

- [x] Measure the published page and capture current offers and images.
- [x] Create optimized Spanish image copies without removing originals.
- [x] Connect responsive images exclusively to /es and prioritize its first image.
- [x] Exclude Wistia from /es while preserving Brazilian video loading.
- [x] Verify offers, currency fallback, checkout parameters, pixel events and all versions.
- [x] Record measured savings and remaining production verification requirement.

## Verified results

- 24 originals preserved; Spanish replacement variants total 1,133,670 bytes versus 20,973,321 bytes for originals (94.6% reduction, comparing largest variants).
- Hero: 2,777,558 bytes originally; Spanish 768px variant 77,112 bytes, high-density 1354px variant 171,670 bytes.
- Desktop/mobile screenshots, original-image identity, page text, all offer buttons, Mexican conversion and EUR fallback verified. Current source base is EUR 14.00; performance work did not change it.
- Hotmart checkout opens with its original product and checkoutMode plus existing UTM propagation; no real purchase submitted.
- Real pixel scripts with intercepted tracking responses: local scrolling after hydration does not produce IC; checkout produces one IC per configured pixel and repeated clicks are deduplicated. Existing pre-hydration click race is outside this performance change; no pixel code modified.
- Brazilian Wistia custom elements initialize; fresh Spanish visits do not request the player.
- Published desktop baseline (3 cold visits): median LCP 632ms, CLS ~0.0135. Slow-mobile baseline LCP observer returned no entries within the measurement window, so no reliable before/after mobile speed claim is made.
- Local original-byte interception bypasses actual CDN transport and is not a production speed comparison. Final published before/after timing requires publication; publication was not requested.