export type SalesImage = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};

export type SalesMedia = Record<string, SalesImage>;

/** Missing overrides deliberately preserve the original Brazilian image attributes. */
export function salesImageProps(original: { url: string }, media?: SalesMedia, sizes?: string) {
  const optimized = media?.[original.url];
  if (!optimized) return { src: original.url };
  return {
    src: optimized.src,
    srcSet: optimized.srcSet,
    sizes: optimized.srcSet ? sizes : undefined,
    width: optimized.width,
    height: optimized.height,
    decoding: "async" as const,
  };
}