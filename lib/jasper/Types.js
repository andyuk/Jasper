//var Text = require('./types/Text').Text;

exports.Text = function(params) {

	var Text = {
		value: '',
		toString: function () {
			// TODO: convert non-strings to strings
			return this.value;
		}	
	};
	
	return Object.extend(Text, params);
};