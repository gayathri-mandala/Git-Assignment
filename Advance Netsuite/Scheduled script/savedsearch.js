function scheduleSearch(){
    var filters = new Array();
    filters[0] = new nlobjSearchFilter( 'name', null, 'startswith', 'Toy' );

    var columns = new Array();
    columns[0] = new nlobjSearchColumn( 'items' );

    var search = nlapiCreateSearch( 'transaction', filters, columns );
    var searchId = search.saveSearch('Salesorder Search', 'customsearch_toys'); 
}