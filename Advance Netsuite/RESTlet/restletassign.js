function getRecord()
{
    
    var o = new Object();
    o.getRecord = 'Found';
    var s = nlapiLoadSearch('transaction','customsearch_ty');
    var resultSet = s.runSearch();
    resultSet.forEachResult(function(searchResult){
        o.getrecord = o.getrecord+searchResult.getValue('tranid');
        o.getrecord = o.getrecord+searchResult.getValue('total');
    })
    return JSON.stringify(o);

}
function postRecord(){

    var email = 'email';
    var value = 'toy@store.com';

    var filters = new Array();
    filters[0] = new nlobjSearchFilter( 'name', null, 'startswith', 'Toy' );
    filters[0] = new nlobjSearchFilter( 'email', null, 'is', value );

    var columns = new Array();
    columns[0] = new nlobjSearchColumn('tranid');
    columns[1] = new nlobjSearchColumn('total');

    var search = nlapiCreateSearch( 'transaction', filters, columns );
	var searchId = search.saveSearch('transaction', 'customsearch_ty'); 
}