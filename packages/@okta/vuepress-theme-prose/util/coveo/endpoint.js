const TOKEN_ENDPOINT =
  "https://wt1ugse0be.execute-api.us-west-2.amazonaws.com/prod/token?site=developer";
const COVEO_PIPELINE = "oktaproduction9ounvcxa";
const COVEO_ENDPOINT = "https://platform.cloud.coveo.com/rest/search";

const _getToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT);
  const data = await response.json();
  const token = data.token;
  localStorage.setItem("coveo_token", token);
  return data.token;
};

const configureCoveoEndpoint = async () => {
  const token = localStorage.getItem("coveo_token") || (await _getToken());

  Coveo.SearchEndpoint.configureCloudV2Endpoint(
    COVEO_PIPELINE,
    token,
    COVEO_ENDPOINT,
    { renewAccessToken: _getToken }
  );
};

export default configureCoveoEndpoint;
