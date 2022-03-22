var itemfulfill=nlapiTransformRecord('salesorder',108734,'itemfulfillment');
itemfulfill.selectLineItem('item','1');
itemfulfill.setCurrentLineItemValue('item','item','6194');
itemfulfill.setCurrentLineItemValue('item','fullfill','T');
itemfulfill.setCurrentLineItemValue('item','quantity',5);
itemfulfill.setCurrentLineItemValue('item','location',2);
itemfulfill.commitLineItem('item')
itemfulfill.selectLineItem('item','2');
itemfulfill.setCurrentLineItemValue('item','item','6195');
itemfulfill.setCurrentLineItemValue('item','fullfill','T');
itemfulfill.setCurrentLineItemValue('item','quantity',5);
itemfulfill.setCurrentLineItemValue('item','location',2);
itemfulfill.commitLineItem('item')
var fulfillmentId = nlapiSubmitRecord(itemfulfill, true)