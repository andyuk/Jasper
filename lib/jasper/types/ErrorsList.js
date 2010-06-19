var HTML = require('./HTML').HTML;

exports.ErrorsList = HTML.extend({

	error_text: 'Please correct the following fields:',
	visible: false,

  init: function(error_text){
    this.error_text = error_text;
  },

	toString: function() {
		return '<p>' + this.error_text + '</p>';
	}
});