/**
 * Icon Resolution Utility
 * 
 * Provides local SVG asset resolution with an automatic fallback to the Iconify API.
 * Ensures all icons load reliably with zero network latency locally and without
 * 404 errors caused by legacy colon-separated paths on the Iconify API.
 */

export function getLocalIconPath(slug: string): string {
  if (slug.startsWith("/") || slug.startsWith("http://") || slug.startsWith("https://")) {
    return slug;
  }
  const safeName = slug.replace(/[:/]/g, "-");
  return `/assets/icons/${safeName}.svg`;
}

export function getIconifyApiUrl(slug: string): string {
  if (slug.startsWith("http://") || slug.startsWith("https://")) {
    return slug;
  }
  // Iconify API expects `{prefix}/{name}.svg` (slash-separated, not colon)
  const path = slug.replace(":", "/").replace(/^\//, "");
  return `https://api.iconify.design/${path}.svg`;
}

