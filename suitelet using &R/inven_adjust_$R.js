function inventoryAdjust(){
    var inventoryAdjust = new $R({
        nlobjRecordType : "inventoryadjustment",
        nlobjFieldIds : {
            subsidiary : 3,
            account : 3
        },
        nlobjSublistIds : {
            item : [{
                item : 6189,
                quantity : 10
            }]
        }
    });

    var recId = inventoryAdjust.save();
}