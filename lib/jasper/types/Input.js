var HTML = require('./HTML').HTML;

exports.Input = HTML.extend({

	attributes: {},
	value: '',

  init: function(attributes) {
    this.attributes = attributes || {};
		if (this.attributes.value) {
			this.value = this.attributes.value;
		}
  },

	toString: function() {

		this.attributes.value = this.value;
		var attributes_html = '';
		for (var key in this.attributes) {
			attributes_html += key + '="' + this.attributes[key] + '" ';
		}
		return '<input ' + attributes_html + '/>';
	}
});