declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    readonly GTAG: string;
    readonly MAPBOX_TOKEN: string;
    readonly ZOHO_ID: string;
    readonly ZOHO_PASSWORD: string;
  }
}
