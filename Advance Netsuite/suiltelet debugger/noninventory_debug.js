var nonitem = nlapiCreateRecord('noninventoryitem');
nonitem.setFieldValue('itemid','Remote Cars');
nonitem.setFieldValue('displayname','Remote Cars');
nonitem.setFieldValue('subsidiary', '1');
nonitem.setFieldValue('includechildren','T');
nonitem.selectNewLineItem('itemvendor');
nonitem.setCurrentLineItemValue('itemvendor','vendor','44466');
nonitem.commitLineItem('itemvendor');
nonitem.setFieldValue('shippingcost', '3');
nonitem.setFieldValue('cost', '25');
nonitem.setFieldValue('weight','60');
nonitem.setFieldValue('taxschedule','1');
var itemid = nlapiSubmitRecord(nonitem,true);