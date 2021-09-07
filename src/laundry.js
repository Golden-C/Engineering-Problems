/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let neatPair = 0;
  for (let i = 0; i < cleanPile.length; i++) {
    if (cleanPile.includes(cleanPile[i], i + 1) && cleanPile.length !== i + 1) {
      let qty = cleanPile.lastIndexOf(cleanPile[i]);
      cleanPile.splice(qty, 1);
      neatPair++;
    } else if (dirtyPile.includes(cleanPile[i])) {
      if (noOfWashes > 0) {
        let qty = dirtyPile.indexOf(cleanPile[i]);
        dirtyPile.splice(qty, 1);
        neatPair++;
        noOfWashes--;
      }
    }
  }
  for (let j = 0; j < dirtyPile.length; j++) {
    if (noOfWashes > 1) {
      if (dirtyPile.includes(dirtyPile[j], j + 1) && j + 1 < dirtyPile.length) {
        let qty = dirtyPile.lastIndexOf(dirtyPile[j]);
        dirtyPile.splice(qty, 1);
        neatPair++;
        noOfWashes -= 2;
      }
    }
  }

  return neatPair;
}

module.exports = getMaxPairs;
