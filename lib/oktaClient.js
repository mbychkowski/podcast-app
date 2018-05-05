const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-548725.oktapreview.com',
  token: '00JfKBROf0qIJPxcGAYTyEFp_cFWInRULmmGfs8SBK'
});

module.exports = client;
