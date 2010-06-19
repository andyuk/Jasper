exports.HTML = Class.extend({

	visible: true,
	value: '',
		
  init: function(html){
    this.value = html;
  },

	toString: function() {
		return this.value;
	}
});