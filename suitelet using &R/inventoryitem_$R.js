function inventoryItem(){

    var itemRecord = new $R({

        nlobjRecordType: "inventoryitem",
        nlobjFieldIds: {
            itemid: "Soft Toys",
            displayname: "Soft Toys",
            subsidiary: 1,
            includechildren : true,
            weight : "8",
            weightunit :1,
            shippingcost: "3",
            purchaseprice : "30",
        },

        nlobjSublistIds : {
            itemvendor : [{
                vendor : 44466,
            }]
        }
    });

    var recId = itemRecord.save();
}