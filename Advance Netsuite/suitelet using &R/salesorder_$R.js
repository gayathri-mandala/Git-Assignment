function salesorder(){
    var salesOrder = new $R({
        nlobjRecordType : "salesorder",
        nlobjFieldIds : {
            entity : 44465,
        },
        nlobjSublistIds : {
            item : [{
                item : 6189,
                quantity : 10
            }]
        }
    });

    var recId = salesOrder.save();
}