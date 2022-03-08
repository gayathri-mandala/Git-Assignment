var request = require("request");
data={
    "name": "REST-SLACK (nodejs)",
    "sandbox": false
}
request({
    url : 'https://api.integrator.io/v1/integrations',
    headers : {
        "Authorization" : 'Bearer ****************'
    },
    method:'POST',
    body: data,
    json: true,
}, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});