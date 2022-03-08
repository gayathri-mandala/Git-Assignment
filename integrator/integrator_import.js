var request = require("request");
data={
    "name": "http import to slack(nodejs)",
    "parsers": [],
    "_connectionId": "****************",
    "oneToMany": false,
    "sandbox": false,
    "http": {
            "relativeURI": [
                "chat.postMessage"
            ],
            "method": [
                "POST"
            ],
            "body": [
                "{\"channel\":\"experiments\", \"text\":\"testing\", \"as_user\":\"gayathri.mandala@celigo.com\"}"
            ],
            "batchSize": 1,
            "sendPostMappedData": true,
            "formType": "http"
        }
}
request({
    url : 'https://api.integrator.io/v1/imports',
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