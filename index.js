const client = require('./client');

client.testSomething({ payload: JSON.stringify({ testKey: 'blah blah blah' }) }, (err, response) => {
  if (err) {
    console.log('err: ', err);
    return;
  }
  try {
    console.log('grpc response.payload:', JSON.parse(response.payload));
  } catch(err) {
    console.log('unable to parse response payload json: ', response);
  }
});
