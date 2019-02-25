Search = (data, keyword) => {
  const elem = data[keyword];
  // additional check for suffix matching
  if (elem && elem.suffix === keyword) {
    // return all users object on match
    return elem.objects;
  }
  return [];
}

module.exports = Search;