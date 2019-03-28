exports.catchErrors = fn => {
	return function(req, res, next) {
		return fn(req, res, next).catch(error => {
			// TODO maybe error page or redirect
		});
	};
};

exports.notFoundError = (req, res) => {
	res.redirect('/api/todos');
};
