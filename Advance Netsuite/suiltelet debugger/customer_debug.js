var customer = nlapiCreateRecord('customer');
customer.setFieldValue('companyname','Toy Store');
customer.setFieldValue('subsidiary','1');
customer.setFieldValue('phone',8092836728 );
customer.setFieldValue('email', 'toy@store.com');
customer.selectNewLineItem('addressbook');
customer.setCurrentLineItemValue('addressbook','city','city1');
customer.setCurrentLineItemValue('addressbook','address1','toy streat');
customer.setCurrentLineItemValue('addressbook','state','CA');
customer.setCurrentLineItemValue('addressbook','country','US');
customer.setCurrentLineItemValue('addressbook','city','city1');
customer.setCurrentLineItemValue('addressbook','zip','90202');
customer.setCurrentLineItemValue('addressbook','defaultshipping','T');
customer.setCurrentLineItemValue('addressbook','defaultbilling','T');
customer.setCurrentLineItemValue('addressbook','label','TS');
customer.commitLineItem('addressbook');
var id = nlapiSubmitRecord(customer);