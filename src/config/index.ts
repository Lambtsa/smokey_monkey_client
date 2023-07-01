interface ConfigType {
  dev: {
    frontendUrl: string;
  };
  prod: {
    frontendUrl: string;
  };
}

const isProd = process.env.NODE_ENV === "production";

export const configuration: ConfigType = {
  dev: {
    frontendUrl: "http://localhost:3000",
  },
  prod: {
    frontendUrl: "http://217.160.153.201/",
    // frontendUrl: "https://smokey-monkey.com/",
  },
};

export const config = isProd ? configuration.prod : configuration.dev;
