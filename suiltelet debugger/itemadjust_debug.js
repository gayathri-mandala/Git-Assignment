var itemad = nlapiCreateRecord('inventoryadjustment');
itemad.setFieldValue('subsidiary', '1');
itemad.setFieldValue('account','3');
itemad.selectNewLineItem('inventory');
itemad.setCurrentLineItemValue('inventory','item','6194');
itemad.setCurrentLineItemValue('inventory','location','2');
itemad.setCurrentLineItemValue('inventory','adjustqtyby','10');
itemad.commitLineItem('inventory');
var itemad = nlapiSubmitRecord(itemad,true);