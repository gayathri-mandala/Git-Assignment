var request = require("request");
data={
    "name": "New flow",
    "disabled": false,
    "_integrationId": "****************",
    "skipRetries": false,
    "pageProcessors": [
        {
            "responseMapping": {
                "fields": [],
                "lists": []
            },
            "type": "import",
            "_importId": "****************"
        }
    ],
    "pageGenerators": [
        {
            "_exportId": "****************"
        }
    ]
}
request({
    url : 'https://api.integrator.io/v1/flows',
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