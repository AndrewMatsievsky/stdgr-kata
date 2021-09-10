// This is my implmentation of "fun" kata on aggregation with prioritized layers
// This might be not the best solution, but this is what I can come up withing 30 minutes.
// ALSO: Note that other candidates could see others forks of your kata, so they could possibly cheat here =)

const aggregateProduct = (dataObjects = []) => {
  // Sorting by number of values in layer, so the layer with most values will be the first in array and so on.
  const sortedByNumberOfLayers = dataObjects.sort(
    (a, b) => Object.values(b).length - Object.values(a).length
  );

  // Reducing array, so that every iteration is overwriting keys with its own key
  return sortedByNumberOfLayers.reduce(
    (acc, currentValue) => ({ ...acc, ...currentValue }),
    {}
  );
};

module.exports = aggregateProduct;
