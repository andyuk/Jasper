var Element = require('./Element').Element;
var Label = require('./Label').Label;

/*
A generic form field type.
*/
exports.Field = Element.extend({

	visible: true,
	name: '',
	label: null,
	value: '',
	wrapper: null,

  init: function(element, attributes, label) {
	
		attributes = attributes || {};
    this._super(element, attributes);

		this.num = Math.random(0, 100);

		if (label instanceof Label) {
			this.label = label;
			this.label.attributes['for'] = attributes.name;
			this.name = label.name;
		} else {
			this.name = label;
		}
		
		if (attributes != undefined) {
			if (attributes.value) {
				this.value = attributes.value;
			}
		}
  },
	
	toString: function() {

		var label_html = '';
		if (this.label) {
			label_html = this.label.toString();
		}
		
		if (this.wrapper) {
			this.wrapper.innerHTML = label_html + this._super();
			return this.wrapper.toString();
		}
		return label_html + this._super();
	}
	
});