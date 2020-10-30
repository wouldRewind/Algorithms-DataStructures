// const { assert } = require("chai")
function swap(arr,firstIndex,secondIndex)
{
	[arr[firstIndex],arr[secondIndex]] = [arr[secondIndex],arr[firstIndex]]
}

function qsort(arr)
{
	const len = arr.length;
	if(len < 2) 
		return arr;
	else{
	const pivot = arr[Math.floor(len/2)];
	const greater = arr.filter(val => val > pivot)
	const less = arr.filter(val => val < pivot )
	return [...qsort(less),pivot,...qsort(greater)]
	}	
}





// describe("quickSort",function () {
// 	it("should sort array via pivot point with divide & conquer principle",function () {
// 		assert.deepEqual(quickSort([5,4,3,2,1]),[1,2,3,4,5]);
// 		assert.deepEqual(quickSort([0]),[0]);
// 		assert.deepEqual(quickSort([-1,-1,-1]),[-1,-1,-1]);
// 		assert.deepEqual(quickSort([]),[]);
// 		assert.deepEqual(quickSort([150,-80,455,198,7]),[-80,7,150,198,455]);
// 	})
// })