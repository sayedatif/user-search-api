const result = {};

const populateNodes = (string, start, end, prefix, id, obj, keyword) => {
	for (let i = start; i < string.length; i++) {
		const next = prefix + string[i]
		// omit if substring is not part of actual string
		if (string.indexOf(next) === -1) {
				continue;
		}

		if (end > 0 || next.length < 3) {
				populateNodes(string, i + 1, end - 1, next, id, obj, keyword);
		} else {
			// if key value not part of dictionary then create new object
			if (!result[next]) {
				obj.order = string.indexOf(keyword);
				obj.score = 10 - obj.order;
				const objToPush = {
					suffix: next,
					objects: [obj],
				}
				const element = result[next];
				// safe check to avoid falsey values
				if (!element) {
					result[next] = objToPush
				}
			} else {
				// if exist then update objects array
				if (result[next].objects && result[next].objects.findIndex(item => item.id === id) === -1) {
					obj.order = string.indexOf(keyword);
					obj.score = 10 - obj.order;
					result[next].objects.push(obj);
				}
			}
		}
	}
}

CreateDict = (data, keyword) => {
	try {
		// loop over users array
		data.map((item, index) => {
			// loop over each key of user object
			for (let key in item) {
				// omit numerical keys(i.e id)
				if (key === 'id') {
					continue;
				}
				//check for substring existence; if not exist skip loop to avoid unnecesary data
				if (item[key].toLowerCase().indexOf(keyword) === -1) {
					continue;
				}
				// loop over string to get all possibilites of a string
				for (let i = 0; i < item[key].length; i++) {
					populateNodes(item[key].toLowerCase(), 0, i, '', index, item, keyword);
				}
			}
		})
		// return created dictionary for searching
		return result;
	} catch (e) {
		console.log('Error creating tree', e);
	}
}

module.exports = CreateDict;