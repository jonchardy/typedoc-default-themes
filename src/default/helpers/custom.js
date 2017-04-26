var helpers = {
	// check if this declaration contains a particular tag
	containsTag: function(value, declaration, options) {
		var array = [];
		if (declaration && declaration.signatures) {
			// pull the tags from the signatures if they exist
			declaration.signatures.forEach(function(s) {
				if (s.comment && s.comment.tags) {
					array = array.concat(s.comment.tags);
				}
			});
		} else if (declaration && declaration.comment && declaration.comment.tags) {
			// otherwise pull from the declaration itself
			array = array.concat(declaration.comment.tags);
		}

		array = array.map(function(t) {
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