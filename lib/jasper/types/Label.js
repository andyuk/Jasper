var Element = require('./Element').Element;
var sys = require('sys');

exports.Label = Element.extend({
	
	label: null,
	
  init: function(field_name, name) {
		this._super('label', {'for': name});
    //this.attributes['for'] = name;
		this.innerHTML = field_name;
	},
	toString: function() {
		//return this.name;
	
		//sys.puts(this.attributes['for']);
		return this._super();
	}
});