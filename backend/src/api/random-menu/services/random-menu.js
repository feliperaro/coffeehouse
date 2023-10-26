module.exports = {
  getRandomItemFromArray(arr) {
    // Generate a random index within the range of valid indices
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Use the random index to access the item in the array
    const randomItem = arr[randomIndex];

    return randomItem;
  },
};
