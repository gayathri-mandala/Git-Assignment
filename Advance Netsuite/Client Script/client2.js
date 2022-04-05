function myFieldChanged(type, name, linenum)
{
    if(name=='phone'){
        text = nlapiGetFieldText('phone');
        nlapiSetFieldValue('phone',text);
        alert('phone field changed to '+text);
    }
}