function creditmemo(){
    var memo=new $R({
        nlobjRecordType:'creditmemo',
        nlobjFieldIds:{
            entity:44465,
            location:1
        },
        nlobjSublistIds:{
            item:[{
                item:6189,
                quantity:10
            }]
        }});

    var id=memo.save();
}