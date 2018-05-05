const okta = require('@okta/okta-sdk-nodejs');

require("dotenv").config();

const client = new okta.Client({
  orgUrl: process.env.REACT_APP_ORG_URL,
  token: process.env.REACT_APP_MEMBERSHIP_TOKEN
});

module.exports = client;
