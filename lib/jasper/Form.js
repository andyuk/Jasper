exports.Form = Class.extend({
	
  init: function(fields, data, attributes){
    this.fields = fields;
		this.attributes = attributes;

		this.setData(data);
  },
	
	// standard form attributes
	attributes: {
		method: 'GET',
		action: ''
	},
	
	// content contains an array of objects that extend HTMLContent
	fields: [],
	data: null,
	
	/*
	Fill form fields with data.
	*/
	setData: function(data) {
		this.data = data;
		
		var attr;
		for (i in this.fields) {
			if (attr = this.fields[i].attributes) {
				if (attr.name != undefined) {
					if (this.data[attr.name] != undefined) {
						this.fields[i].value = this.data[attr.name];
					}
				}
			}
		}
		
	},
	
	validate: function() {
		return true;
	},
	
	toString: function() {
		
		var attributes_html = '';
		for (key in this.attributes) {
			attributes_html += key + '="' + this.attributes[key] + '" ';
		}
		
		var fields_html = '';
		for (i in this.fields) {
			if (this.fields[i].visible) {
				fields_html += this.fields[i] + '\n';
			}
		}
		return '<form ' + attributes_html + '>\n' + fields_html + '</form>';
	}
});