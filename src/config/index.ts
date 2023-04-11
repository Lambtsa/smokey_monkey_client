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
    backendUrl: "http://localhost:8080",
    frontendUrl: "http://localhost:3000",
  },
  prod: {
    backendUrl: "http://api.217.160.153.201",
    frontendUrl: "http://217.160.153.201",
  },
};

export const config = isProd ? configuration.prod : configuration.dev;
