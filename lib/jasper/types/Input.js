var Field = require('./Field').Field;

exports.Input = Field.extend({

  init: function(attributes, label) {
		
		attributes = attributes || {};
		
		if (attributes.value) {
			this.value = attributes.value;
		}
		
    this._super('input', attributes, label);
  },

	toString: function() {

		this.attributes.value = this.value;
		
		return this._super();
	}
});