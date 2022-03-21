function noninventoryItem(){

    var nonitemRecord = new $R({

        nlobjRecordType: "noninventoryitem",

        nlobjFieldIds: {
            itemid: "Toy Cars",
            displayname: "Toy Cars",
            subsidiary: 1,
            includechildren : true,
            weight : "8",
            weightunit :1,
            shippingcost: "3",
            purchaseprice : "25",
            taxschedule : 2
        },

        nlobjSublistIds : {
            itemvendor : [{
                vendor : 44466,
            }]
        }
    });

    var recId = nonitemRecord.save();
}