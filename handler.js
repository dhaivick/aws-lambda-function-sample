'use strict';

module.exports.testGETRequest = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hey ${process.env.author}!`,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.testPOSTRequest = async (event) => {
  return {
	headers: {
    	'Content-Type': 'application/json',
    	'Access-Control-Allow-Origin': '*'
    },
    statusCode: 200,
    body: JSON.stringify({
		message:`Hey POST!`,
	}),
  }
};
