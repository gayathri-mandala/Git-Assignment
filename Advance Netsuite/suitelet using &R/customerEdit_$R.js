function customerRecord(){
    $$.logExecution('Begin....')
    var custRecord = new $R({
        nlobjRecordType: "customer",
        writelog : true,
        id : 44465,
        nlobjFieldIds: {
            internalid : 44465,
            email : "sushmitha.asara@sush.com",
        },
        nlobjSublistIds : {
            addressbook : [{
                city : "city",
                state: "CA",
                country : "US",
                defaultshipping: true,
                defualtbilling: true,
            },{
                city : "city2",
                state : "OH",
                country : "US",
                defualtbilling : true,
                defaultshipping : true
            }]
        }
    });
    custRecord.set('phone','1234567890');
    $$.logExecution('customer Record : ',JSON.stringify(custRecord))

    var recId = custRecord.save();
}