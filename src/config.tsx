type Config = {
  os: {
    ios: string;
    android: string;
    web: string;
  };

  api: {
    github: {
      v1: {
        mainUrl: string,
        endpoints: {
          [key: string]: string,
        }
      }
    }
  },
}

export const Config: Config = {
  os: {
    android: "android",
    ios: "ios",
    web: "web"
  },

  api: {
    github: {
      v1: {
        mainUrl: 'https://api.github.com',
        endpoints: {
          search: 'search/repositories'
        }
      }
    }
  }
};
