

function selectionSort(arr) {

  // Copy the original array
  const copy = arr.slice();
  // Create an array to store the sorted values
  const rv = [];
  // While the array is not empty...
  while (copy.length > 0) {
    // Do not move this console.log
    console.log(rv.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = copy[0];
    let minIdx = 0
    for (let i = 1; i < copy.length; i++) {
      if (copy[i] < min) {
        min = copy[i];
        minIdx = i;
      }
    }
    // Save and remove the value at the min index
    const val = copy.splice(minIdx, 1)[0];
    // Add the min value to the end of the sorted array
    rv.push(val);
  }

  return rv;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let div = 0;
  // Repeat while the unsorted half is not empty:
  while (div < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = arr[div];
    let minIdx = div
    for (let i = div; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }
    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIdx; i > div; i--) {
      arr[i] = arr[i-1];
    }
    // Put the min value at the divider
    arr[div] = min;

    // Increment the divider and repeat
    div++;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
