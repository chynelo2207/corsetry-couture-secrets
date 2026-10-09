/** Stop automatic pixel click listeners only for actions that stay on this page. */
export function captureLocalOfferAction(
  event: { preventDefault: () => void; stopPropagation: () => void },
  action: () => void,
) {
  event.preventDefault();
  event.stopPropagation();
  action();
}