function rma8(){
    var rma_8 = new $R({
        nlobjRecordType:'returnauthorization',
        nlobjTransformType:'salesorder',
        nlobjTransformId:108718,
        nlobjSublistIds:{
            item:[{
                item:6189,
                quantity:5
            }]
        }
    });
    var id=rma_8.save();
}