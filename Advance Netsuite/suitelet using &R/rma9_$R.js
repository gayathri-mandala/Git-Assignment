function rma6(){
    var m=new $R({
        nlobjRecordType:'returnauthorization',
        nlobjTransformType:'invoice',
        nlobjTransformId:108729,
      nlobjSublistIds:{
            item:[{
                item:6189,
                quantity:5
            }]
        }
    });
    var id=m.save();
}