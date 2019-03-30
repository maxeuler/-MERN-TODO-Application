exports.catchErrors = fn => {
	return function(req, res, next) {
		return fn(req, res, next).catch(error => {
			console.error(error);
		});
	};
};

exports.notFoundError = (req, res) => {
	res.redirect('/api/todos');
};
