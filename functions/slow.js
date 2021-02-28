const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const slowifyUrl = event.queryStringParameters.url;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(slowifyUrl);

    if (!response.ok)
      return { statusCode: response.status, body: response.statusText };

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "access-control-allow-origin": "*",
      },
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
      headers: {
        "access-control-allow-origin": "*",
      },
    };
  }
};
