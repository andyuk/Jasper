exports.Element = Class.extend({

	tag: '',
	attributes: {},
	innerHTML: '',

	closing_tag: true,

  init: function(tag, attributesOrInnerHTML, innerHTML) {
	
		this.tag = tag;
		
		if (typeof attributesOrInnerHTML == "string") {
			this.innerHTML = attributesOrInnerHTML;
		} else if (attributesOrInnerHTML) {
			this.attributes = attributesOrInnerHTML;
		}
    if (innerHTML != undefined) {
			this.innerHTML = innerHTML;
		}
		
		// these tags don't need closing tags.
		var close_tags = ['area','base', 'basefont','br','hr','input','img','link','meta'];
		var do_match = function(e) { 
			return e == tag; 
		};
		if (close_tags.some(do_match)) {
			this.closing_tag = false;
		}
  },

	getAttributes: function() {
		
		var attributes_html = '';
		if (this.attributes != undefined) {
			for (var key in this.attributes) {
				attributes_html += ' ' + key + '="' + this.attributes[key] + '"';
			}
		}
		return attributes_html;
	},

	toString: function() {

		var start_tag;
		var end_tag;
		
		if (this.closing_tag) {
			start_tag = '<' + this.tag + this.getAttributes() + '>';
			end_tag =  '</' + this.tag + '>';
			
		} else {
			start_tag = '<' + this.tag + this.getAttributes() + '/>';
			end_tag = '';
		}
		return start_tag + this.innerHTML + end_tag;
	}
});