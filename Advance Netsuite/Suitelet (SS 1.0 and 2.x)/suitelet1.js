function replace(){
    var customer = nlapiLoadRecord('customer',44401);
    var number = customer.getFieldValue('phone');
    customer.setFieldValue('custentity25',number);
    var id = nlapiSubmitRecord(customer);
}