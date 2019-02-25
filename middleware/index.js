const ReadFile = require('../helpers/ReadFile');
const CSVToArray = require('../helpers/CSVToArray');

module.exports = () => {
  return async (req, res, next) => {
		const csvData = await ReadFile(__dirname + '/data.csv');
		const processData = CSVToArray(csvData);
		// populate req.data with users data received from CSV
		req.data = processData;
		next()
	}
}