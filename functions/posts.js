const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
  const users = await getCollection();
  try {
    const res = await users.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res.data).map((i) => res.data[i])),
      headers: {
        'Content-type': 'application/json',
      },
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
