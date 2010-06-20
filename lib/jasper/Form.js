var Element = require('./types/Element').Element;
var Field = require('./types/Field').Field;
var ErrorsList = require('./types/ErrorsList').ErrorsList;
var sys = require('sys');

exports.Form = Element.extend({
	
  init: function(fields, data, attributes){
		
		this._super('form', attributes);
    this.fields = fields;
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
		
		var attributes;
		for (i in this.fields) {
			if (this.fields[i] instanceof Field) {
				attributes = this.fields[i].attributes;
				
				if (this.data[attributes.name] != undefined) {
					this.fields[i].value = this.data[attributes.name];
				}
			}
		}
	},
	
	validate: function() {
		
		var is_valid = true;
		var errors = [];
		
		var attributes;
		
		// validate required and max_length
		for (i in this.fields) {
			if (this.fields[i] instanceof Field) {
				attributes = this.fields[i].attributes;
				
				// TODO: trim string.
				if (attributes != undefined && attributes.required != undefined && this.fields[i].value.length == 0) {
					
					this.fields[i].has_error = true;
					errors.push(this.fields[i].name + " is required.");
					is_valid = false;
				}
			}
		}

		// assign errors to ErrorList
		for (i in this.fields) {
			if (this.fields[i] instanceof ErrorsList) {
				this.fields[i].visible = !is_valid;
				this.fields[i].errors = errors;
			}
		}
		
		return is_valid;
	},
	
	toString: function() {
		
		this.innerHTML = '';
		for (i in this.fields) {
			if (this.fields[i].visible) {
				
				// wrap each field in a field wrapper
				this.innerHTML += this.fields[i] + '\n';
			}
		}
		
		return this._super().toString();
	}
});