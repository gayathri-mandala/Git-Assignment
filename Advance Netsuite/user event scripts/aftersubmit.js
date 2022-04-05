function afterSubmit(type) {
    if(type=='create'){
    
        var fromId = 44389; 
        var toEmail = nlapiGetFieldValue('entity');
        var sbj = 'subject';
        var msg = 'ITEM ON THE ORDER';
    
        var fileObj = nlapiPrintRecord('TRANSACTION',nlapiGetRecordId(), 'PDF',null);
        nlapiSendEmail(fromId, toEmail, sbj, msg, null, null, null, fileObj);
    
    }
}