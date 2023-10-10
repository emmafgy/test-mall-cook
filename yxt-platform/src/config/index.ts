const config: Config = {
  themeColor: import.meta.env.VITE_THEME_COLOR as string,
  baseURL: import.meta.env.VITE_BASE_SERVER_URL as string,
  microAppName: import.meta.env.VITE_MICROAPPNAME as string,
  homePath: import.meta.env.VITE_HOME_PATH as string,
  h5IframeUrl: import.meta.env.VITE_H5_IFRAME_URL as string,
};

export default config;
