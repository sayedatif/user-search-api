const Search = require('../helpers/Search');
const CreateDict = require('../helpers/CreateDict');
const SortAndRank = require('../helpers/SortAndRank');

module.exports = (app) => {
  app.get('/search', async (req, res) => {
		try {
			const { query } = req;
			// check for keyword length in query params
			if (query.keyword && query.keyword.length < 3) {
				throw new Error('Keyword error')
			}

			const tree = CreateDict(req.data, query.keyword);
			const matchedResults = Search(tree, query.keyword);
			const sortResults = SortAndRank(matchedResults)
			// return sorted user obj
			res.send(sortResults);
		} catch (e) {
			let message = 'Bad request! try again later.';
			if (e.message) {
				message = e.message
			}
			res.status(400).send(message);
		}
	})
}