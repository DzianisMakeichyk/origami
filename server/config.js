/* eslint no-underscore-dangle: "off" */
const {
  NODE_ENV = 'development',
  PORT,
  TENANT_ID,
  API_URL
} = process.env;

const DEV = NODE_ENV !== 'production';

global.__appConfig = {
  NODE_ENV,
  PORT: parseInt(PORT, 10),
  HOST_NAME: `http://localhost:${PORT}`,
  TENANT_ID,
  API_URL,
  DEV
};

module.exports = global.__appConfig;
