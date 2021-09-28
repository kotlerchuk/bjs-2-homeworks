function compareArrays(arr1, arr2) {

	// Ваш код

	return arr1.length === arr2.length && arr1.every((item, idx) => arr1[idx] === arr2[idx]);
};


function advancedFilter(arr) {
	return arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
}