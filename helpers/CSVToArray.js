CSVToArray = stringData => {
  const csvArray = []; // array to hold manipulate objects

  const csvRows = stringData.split('\n'); // break string on \n to get rows
  const csvHeader = csvRows.shift().split(','); // create headers from rows

  // loop over rows to create Objects
  for (let index = 0; index < csvRows.length; ++index) {
    const rowArray = csvRows[index].split(',');
    const rowObject = {};
    
    // loop over single row to map with object keys
    for (let j = 0; j < rowArray.length; ++j) {
      const key = csvHeader[j];
      const value = rowArray[j];
      rowObject[key] = value;
    }
    csvArray[index] = {
      ...rowObject,
      id: index
    };
  }

  return csvArray;
}

module.exports = CSVToArray;