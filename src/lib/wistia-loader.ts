const WISTIA_SCRIPTS = [
  { src: "https://fast.wistia.com/player.js", type: "text/javascript" },
  { src: "https://fast.wistia.com/embed/a5jnm5622k.js", type: "module" },
];

/** Called only by pages that actually render the existing Wistia player. */
export function loadWistia(document: Document) {
  for (const { src, type } of WISTIA_SCRIPTS) {
    if (document.querySelector(`script[src="${src}"]`)) continue;
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.async = true;
    document.head.appendChild(script);
  }
}