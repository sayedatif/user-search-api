SortAndRank = (users) => {
	users.sort((a, b) => {
		if (a.order < b.order) {
			return -1
		}
		if (a.order > b.order) {
			return 1
		}
		return 0
	})
	return users;
}

module.exports = SortAndRank;