SortAndRank = (users) => {
	users.sort((a, b) => {
		// give order priority since matchOn key starts with keyword/substring
		if (a.order < b.order) {
			return -1
		}
		if (a.order > b.order) {
			return 1
		}
		// ordering based on length smaller words are given preference
		if (a[a.matchOn].length < b[b.matchOn].length) {
			return -1
		}
		if (a[a.matchOn].length > b[b.matchOn].length) {
			return 1
		}
		return 0
	})
	return users;
}

module.exports = SortAndRank;