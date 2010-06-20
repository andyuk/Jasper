var Element = require('./Element').Element;
var Literal = require('./Literal').Literal;

exports.ErrorsList = Literal.extend({

	error_text: '',
	visible: false,
	errors: [],
	wrapper: new Element('div', {class: 'errors_list'}),

  init: function(error_text){
    this.error_text = error_text;
  },

	toString: function() {
		
		var errors_list = '';
		
		for (i in this.errors) {
			errors_list += '<li>' + this.errors[i] + '</li>\n';
		}
		if (this.errors.length > 0) {
			errors_list = '\n<ul>\n' + errors_list + '</ul>';
		}
		//return '<div class="error_list">' + this.error_text + errors_list + '</div>';
		this.wrapper.innerHTML = this.error_text + errors_list;
		return this.wrapper.toString();
	}
});