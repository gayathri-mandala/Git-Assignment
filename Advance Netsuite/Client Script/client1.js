function mySaveRecord(type){
    alert('mySaveRecord');
    return true;
}
function myFieldChanged(type,name,linenum){
    alert('myFieldChanged');
    alert('type='+type);
    alert('name='+name);
    alert('linenum='+linenum);
}
function myRecalc(type)
{
    alert('myRecalc');
    alert('type='+type);
}
function myPageInit(type){
    alert('myPageInit');
    alert('type='+type);
}