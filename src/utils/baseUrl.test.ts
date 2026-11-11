import { baseUrlFromHeaders, DEFAULT_BASE_URL } from "./baseUrl";

/* Same lookup as the Headers that next/headers returns: lowercase names, null when missing */
const headersOf = (values: Record<string, string>) => {
  return {
    get: (name: string) => values[name.toLowerCase()] ?? null,
  };
};

describe("baseUrlFromHeaders", () => {
  test("uses the forwarded host and protocol set by the proxy", () => {
    const url = baseUrlFromHeaders(headersOf({
      host: "127.0.0.1:8080",
      "x-forwarded-host": "www.smokey-monkey.com",
      "x-forwarded-proto": "https",
    }));
    expect(url.href).toBe("https://www.smokey-monkey.com/");
  });

  test("works on any domain, e.g. a staging site", () => {
    const url = baseUrlFromHeaders(headersOf({
      host: "staging.smokey-monkey.com",
    }));
    expect(url.href).toBe("https://staging.smokey-monkey.com/");
  });

  test("uses http for localhost when no protocol is forwarded", () => {
    const url = baseUrlFromHeaders(headersOf({
      host: "localhost:8080",
    }));
    expect(url.href).toBe("http://localhost:8080/");
  });

  test("takes the first value when several proxies added theirs", () => {
    const url = baseUrlFromHeaders(headersOf({
      "x-forwarded-host": "www.smokey-monkey.com, internal.proxy",
      "x-forwarded-proto": "https, http",
    }));
    expect(url.href).toBe("https://www.smokey-monkey.com/");
  });

  test("falls back to the default for missing or forged hosts", () => {
    expect(baseUrlFromHeaders(headersOf({})).href).toBe(`${DEFAULT_BASE_URL}/`);
    expect(baseUrlFromHeaders(headersOf({
      host: "evil.com/path?x=1",
    })).href).toBe(`${DEFAULT_BASE_URL}/`);
    expect(baseUrlFromHeaders(headersOf({
      host: "<script>",
    })).href).toBe(`${DEFAULT_BASE_URL}/`);
  });

  test("ignores an unknown forwarded protocol", () => {
    const url = baseUrlFromHeaders(headersOf({
      host: "www.smokey-monkey.com",
      "x-forwarded-proto": "javascript",
    }));
    expect(url.href).toBe("https://www.smokey-monkey.com/");
  });
});
