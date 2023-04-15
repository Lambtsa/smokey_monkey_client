declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    readonly gaTrackingId: string;
    readonly MAPBOX_TOKEN: string;
    readonly GMAIL_PASSWORD: string;
    readonly GMAIL_ID: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
  }
}
