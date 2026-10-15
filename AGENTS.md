<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep international price detection and live exchange-rate presentation in a browser-only effect supplied by the international routes (/ and /es); other Brazilian variants must not request conversion feeds.
- Use getClassicOffer to separate offer behavior from display language; the Portuguese default retains international benefits and checkout without domestic upgrade or video behavior.
- Load Microsoft Clarity through the root route's global head scripts so every page shares the same installation without modifying existing tracking or sales behavior.
- Capture and stop pixel click propagation for local offer scrolling and upgrade-modal opening; leave real checkout navigation to the existing UTMify listeners, which deduplicate each event per pixel and page load, so local actions cannot consume InitiateCheckout.
- Install the UTMify TikTok loader exactly once with the latest supplied configuration; its global pixel ID is shared by all copies, so multiple installations duplicate events rather than isolating configurations.
- Supply optimized image overrides through the international routes (/ and /es), preserving default assets for the other Brazilian variants and historical assets.
- Load Wistia idempotently from sales pages only when their video is rendered, including client-side route transitions; Spanish visits should not download an unused player.
