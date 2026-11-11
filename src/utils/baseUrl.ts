export const DEFAULT_BASE_URL = "https://www.smokey-monkey.com";

/* A host name with an optional port: "www.smokey-monkey.com", "localhost:8080" */
const HOST_PATTERN = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*(:\d{1,5})?$/i;

interface HeaderReader {
  get(name: string): string | null;
}

/* Proxies can send "a, b" when the request passed several of them: the first is the client's */
const firstValue = (value: string | null): string => value?.split(",")[0]?.trim() ?? "";

const isLocalHost = (host: string): boolean => /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host);

/**
 * The site's own address, worked out from the request, so the same build works
 * on any domain. Behind Caddy, X-Forwarded-Host and X-Forwarded-Proto give the
 * address the visitor used. Anything that doesn't look like a host name falls
 * back to https://www.smokey-monkey.com.
 * @example https://www.smokey-monkey.com, http://localhost:8080
 */
export const baseUrlFromHeaders = (headers: HeaderReader): URL => {
  const host = firstValue(headers.get("x-forwarded-host")) || firstValue(headers.get("host"));

  if (!HOST_PATTERN.test(host)) {
    return new URL(DEFAULT_BASE_URL);
  }

  const forwardedProto = firstValue(headers.get("x-forwarded-proto")).toLowerCase();
  const defaultProto = isLocalHost(host) ? "http" : "https";
  const proto = forwardedProto === "http" || forwardedProto === "https" ? forwardedProto : defaultProto;

  return new URL(`${proto}://${host}`);
};
