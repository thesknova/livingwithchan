// Single source of truth for the site's canonical origin.
//
// The apex (livingwithchan.com) redirects to www, so www is the canonical
// host. Every absolute URL the site emits — metadataBase, canonical tags,
// sitemap entries, JSON-LD — must agree with it, or Google picks a canonical
// for us and splits signals across two hostnames.
export const SITE_URL = "https://www.livingwithchan.com";

/** Absolute URL for a site-relative path, e.g. absoluteUrl("/blog") */
export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
