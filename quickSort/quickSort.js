const { assert } = require("chai")

function qsort(arr)
{
	const len = arr.length;
	if(len < 2) return arr;

	const pivot = arr[Math.floor(len/2)];
	const greater = arr.filter(val => val > pivot)
	const less = arr.filter(val => val < pivot )
	const equal = arr.filter(val => val == pivot)

	return [...qsort(less),...equal,...qsort(greater)]
}




describe("qsort",function () {
	it("should sort array via pivot point with divide & conquer principle",function () {
		assert.deepEqual(qsort([5,4,3,2,5,1]),[1,2,3,4,5,5]);
		assert.deepEqual(qsort([0]),[0]);
		assert.deepEqual(qsort([-1,-1,-1]),[-1,-1,-1]);
		assert.deepEqual(qsort([]),[]);
		assert.deepEqual(qsort([150,-80,455,198,7]),[-80,7,150,198,455]);
	})
})