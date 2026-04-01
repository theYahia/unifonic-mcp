const BASE_URL = "https://el.cloud.unifonic.com/rest";
const TIMEOUT = 15_000;

export class UnifonicClient {
  private appSid: string;

  constructor() {
    this.appSid = process.env.UNIFONIC_APP_SID ?? "";
    if (!this.appSid) {
      throw new Error(
        "Environment variable UNIFONIC_APP_SID is required. " +
        "Get your App SID at https://docs.unifonic.com/"
      );
    }
  }

  async request(method: string, path: string, body?: Record<string, string>): Promise<unknown> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT);

    try {
      const params = new URLSearchParams({ AppSid: this.appSid, ...body });
      const url = method === "GET"
        ? `${BASE_URL}${path}?${params}`
        : `${BASE_URL}${path}`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
        body: method !== "GET" ? params.toString() : undefined,
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Unifonic HTTP ${response.status}: ${text}`);
      }

      return response.json();
    } catch (error) {
      clearTimeout(timer);
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("Unifonic: request timeout (15s). Try again later.");
      }
      throw error;
    }
  }
}
