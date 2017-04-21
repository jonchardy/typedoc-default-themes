var helpers = {
	containsTag: function(value, declaration, options) {
		// fallback...
		var array = [];
		if(declaration && declaration.signatures){
			declaration.signatures.forEach(function(s){
				if(s.comment && s.comment.tags){
					array = array.concat(s.comment.tags);
				}
			});

			//if(array) console.log("contains", value, array);
		}

		array = array.map(function(t){
			if (t) {
				return t.tagName;
			}
			return false;
		});
		return (array.indexOf(value) > -1) ? options.fn(this) : "";
	},

	ifEquals: function(value1, value2, options) {
		return value1 === value2 ? options.fn(this) : "";
	}
};
module.exports = helpers;