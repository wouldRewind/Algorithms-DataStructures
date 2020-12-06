// Рекурсия 3.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include <vector>
using namespace std;

int getLastIndex(vector<int> arr)
{
	int idx = -1; // для пустого массива вернет -1
	for (int i = 0; i < arr.size(); i++)
		idx++;
	return idx;
}

bool Search(vector<int> arr, int k)
{
	int middlePoint = arr.size() / 2;
	vector <int> newArr;
	if (arr[middlePoint] == k) return true;
	else if (k > arr[middlePoint]) {
		copy(0, middlePoint, back_inserter(newArr));
	}
		
	
}

int main()
{

}

