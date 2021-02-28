const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("https://api.github.com/users?per_page=5", {
      Accept: "application/json",
    });

    if (!response.ok)
      return { statusCode: response.status, body: response.statusText };

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
