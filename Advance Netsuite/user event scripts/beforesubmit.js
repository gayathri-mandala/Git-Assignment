function beforeSubmit(type) {
    if (type == 'create') {
        var salesOrder = nlapiGetNewRecord();
        var customerId = salesOrder.getFieldValue('entity');
        var orderId = salesOrder.getFieldValue('tranid');
        if (orderId != null && customerId != null)
        {
            var customRecordType = 'customrecordcustrecord_sales_order';
            var columns = new Array();
            columns[0] = new nlobjSearchColumn('custrecordordernumberid');
            columns[1] = new nlobjSearchColumn('custrecordcustomernumber');
            var filters = new Array();
            filters[0] = new nlobjSearchFilter('custrecordordernumberid', null, 'is', orderId);
            filters[1] = new nlobjSearchFilter('custrecordcustomernumber', null, 'is', customerId);
            var checkRecord = nlapiSearchRecord( customRecordType, null, filters, columns);
            if (checkRecord == null) {
                // create
                var customRecord = nlapiCreateRecord(customRecordType);
                customRecord.setFieldValue('custrecordordernumberid', orderId);
                customRecord.setFieldValue('custrecordcustomernumber', customerId);
                var customRecordInternalId = nlapiSubmitRecord( customRecord );
                nlapiLogExecution('DEBUG', 'SUCCESS', 'Created custom record with internal id ' + customRecordInternalId);
            }
            else {
                nlapiLogExecution('DEBUG', 'not created', 'record already exists');
            }
        }
    }
}   