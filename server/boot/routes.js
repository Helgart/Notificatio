module.exports = function(app) {
	app.get(
		'/register/:name',
		function (req, res) {
			res.send('Get notification received');
		}
	);

	app.post(
		'/register/:name',
		function (req, res) {
			res.send('Post notification received');
		}
	);
}