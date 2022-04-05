function itemfulfillment6(){
    var itemfulfill6=new $R({
        nlobjRecordType:'itemfulfillment',
        nlobjTransformType:'salesorder',
        nlobjTransformId:108718,
        nlobjSublistIds:{
            item:{
                lines:[{
                item:6189,
                fullfill:true,
                quantity:5,
                location:1
            }]
        }}
    });
    var id=itemfulfill6.save();
}