/* Divide & Conquer
Divide : Рекурсивно делим массив пополам, пока не доберемся до элементарного случая - массива длинной 1
Conquer: собираем пазл - начиная с конца, сливаем массивы*/

const { assert, expect } = require("chai");

function mergeSort(arr)
{
	// обращение arr.length имеет сложность O(n), а я использую его дважды
	const len = arr.length;
	// если в массиве 1 или 0 элементов, массив отсортирован
	if(len < 2) return arr;
	// серединный индекс массива, округленный в большую сторону специально для метода Array.slice()
	const center = Math.floor(len / 2);
	/*Прямой ход: рекурсивно разбиваю массив на элементарные подмассивы до fire-case`а - массива длинной 1
	Обратный ход: сливаю(merge) полученные подмассивы, сортируя их*/
	return merge(mergeSort(arr.slice(0,center)),mergeSort(arr.slice(center)));
}

function merge(left,right){ // левый и правый подмассив
	const arr = [] // массив соития левого и правого подмассивов
	/*Пока хотя бы один подмассив не опустеет:
	сравниваю их первые элементы(подмассивы отсортированы, кстати)
	меньший из сравнимаемых элементов вырезаю из его подмассива и пушу в мой arr*/
	while(left.length && right.length)
	{
		if(left[0] > right[0]) 
			arr.push(right.shift())
		else
			arr.push(left.shift())
	}
	/*Теперь в arr хранятся отсортированные элементы
	НО в left или right мог остаться элемент(ы), который(ые) точно больше элементов массива arr
	Поэтому докидываю к arr left и right (Я же не знаю, в каком из них остался(ись) элемент(ы))*/
	return arr.concat(right,left);
}

describe("mergeSort",function()
{
	it("should splits arrays on halfs recursively and merge ",function()
	{
		assert.deepEqual(mergeSort([-5,3,1]),[-5,1,3]);
		assert.deepEqual(mergeSort([5,4,3,2]),[2,3,4,5]);
		assert.deepEqual(mergeSort([1,2,3,8,7]),[1,2,3,7,8]);
	})
})