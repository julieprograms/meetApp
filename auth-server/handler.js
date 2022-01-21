const { google } = require("googleapis");
const OAUTH2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

/**
 * SCOPES allows to set access levels; set for read-only because of missing access rights to update the calendar
 */

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
 * Credentials are the values required to get access to the calendar;
 * process.env means the value is in the config.json file (best practice to keep the api hidden!)
 * important: add config.json to gitignore file!
 */

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis/oauth2/v1/certs",
  redirect_uris: ["https://julieprograms.github.io/meetApp/"],
  javascript_origins: ["https://julieprograms.github.io", "http://localhost:3000"],
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
};
const { client_secret, client_id, redirect_uris, calendar_id} = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);


/**
 * 1st step in the oauth process is to generate a url so users can log in with google and be authorized
 * after logging in they'll receive a code as url parameter.
 */


module.exports.getAuthURL = async () => {

  /**
   * scopes array passed to the scope option. 
   * any scopes passed must be enabled in the OAuth consent screen settings in the project on the google console.
   * any passed scopes are the ones users will see when the consent screen is displayed to them.
   */

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  //decode authorization code extracted from the url query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     * exchange authorization code for access token with a callback after the exchange
     * the callback in an arrow function with the results as parameters: err and token
     */

    oAuth2Client.getToken(code, (err, token) => {
      if(err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
      .then((token) => {
        //respond with oauth token
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(token),
        };
      })
      .catch((err) => {
        //handle error
        console.error(err);
        return {
          statusCode: 500,
          body: JSON.stringify(err),
        };
      });
};

module.exports.getCalendarEvents = event => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);

  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {

    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
    },
    (err, response) => {
      if(err) {
        reject(err);
      } 
      resolve(response);
    }
    );
  })
  .then(results => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({events: results.data.items}),
    };
    })
    .catch(err => {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(err),
      };
      });
}