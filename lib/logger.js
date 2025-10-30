const isProduction = process.env.NODE_ENV === 'production';

export const logger = {
  log: (...args) => {
    if (!isProduction) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }
  },
  warn: (...args) => {
    if (!isProduction) {
      // eslint-disable-next-line no-console
      console.warn(...args);
    }
  },
  error: (...args) => {
    if (!isProduction) {
      // eslint-disable-next-line no-console
      console.error(...args);
    }
  },
};
