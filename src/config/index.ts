interface ConfigType {
  dev: {
    backendUrl: string;
    frontendUrl: string;
  };
  prod: {
    backendUrl: string;
    frontendUrl: string;
  };
}

const isProd = process.env.NODE_ENV === "production";

export const configuration: ConfigType = {
  dev: {
    backendUrl: "http://localhost:1337",
    frontendUrl: "http://localhost:3000",
  },
  prod: {
    backendUrl: "https://api.smokey-monkey.com/",
    frontendUrl: "https://smokey-monkey.com/",
  },
};

export const config = isProd ? configuration.prod : configuration.dev;
