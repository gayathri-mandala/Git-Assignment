function itemfulfillment5(){
    var itemfulfill=new $R({
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
    var id=itemfulfill.save();
}