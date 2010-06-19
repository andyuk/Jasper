
require.paths.unshift('.')
var Class = require('../class/Class').Class;

exports.Model = {
	
	val: function() {
		return 'here i am';
	},	
	save: function() {
		return 'saved!';
	},
	toString: function () {
		// TODO: convert non-strings to strings
		return this.value;
	}
};

