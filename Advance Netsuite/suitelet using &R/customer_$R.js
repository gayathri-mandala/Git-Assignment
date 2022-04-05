function customerRecord(){
    $$.logExecution('Begin....')
    var custRecord = new $R({
        nlobjRecordType: "customer",
        writelog : true,
        id : 44465,
        nlobjFieldIds: {
            internalid : 44465,
            email : "sushmitha.asara@sush.com",
        }
    });
    custRecord.set('phone','1234567980');
    $$.logExecution('customer Record : ',JSON.stringify(custRecord))

    var recId = custRecord.save();
}