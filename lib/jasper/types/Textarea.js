var Field = require('./Field').Field;

exports.Textarea = Field.extend({

  init: function(attributes, name) {
    this._super('textarea', attributes);
		this.name = name;
  },

	toString: function() {
		
		this.innerHTML = this.value;
		return this._super();
	}
});