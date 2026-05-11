module.exports = function towelSort(matrix) {
  if (typeof matrix === 'undefined') {
    return [];
  }
  return matrix.flatMap((element, index) => {
    return index === 1 || index === 3 ? [...element].reverse() : element;
  });
};

/* module.exports = function towelSort(matrix) {
  const newArray = [];
  if (typeof matrix === 'undefined') {
    return newArray;
  }
  matrix.forEach((element, index) => {
    if (index === 1 || index === 3) {
      newArray.push(...element.reverse());
    } else {
      newArray.push(...element);
    }
  });
  return newArray;
}; */
