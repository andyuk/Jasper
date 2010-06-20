var Field = require('./Field').Field;
var Element = require('./Element').Element;

/*
A wrapper class that surrounds one or many fields.
Error messages are assigned to this object.
*/
exports.FieldHolder = FieldHolder.extend({
	
	has_error: false,
	
});
