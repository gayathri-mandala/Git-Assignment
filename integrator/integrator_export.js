var request = require("request");
data={
    "name": "REST export(nodejs)",
    "_connectionId": "****************",
    "oneToMany": false,
    "sandbox": false,
    "http": {
        "relativeURI": "/test/orders",
        "method": "GET",
        "successMediaType": "json",
        "errorMediaType": "json",
        "formType": "rest"
    }
}
request({
    url : 'https://api.integrator.io/v1/exports',
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