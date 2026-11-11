declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    /* App */
    readonly CI: boolean;
    readonly APP_LOG_LEVEL: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';

    /* Google tag manager (optional), read when pages are served */
    readonly GTAG?: string;

    /* Mapbox access token for the map on the home page, read when pages are served */
    readonly MAPBOX_TOKEN?: string;

    /* Zoho SMTP account used by the reservation email API route */
    readonly ZOHO_ID: string;
    readonly ZOHO_PASSWORD: string;
  }
}
