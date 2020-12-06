/*
* Эта задача была тестовой на собеседовании у моего соседа Адиля на позицию C# разработчика где-то месяц назад
* Тогда я не догадался, как ее решать :)
*/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int getLastIndex(vector<int> arr)
{
	int idx = -1;
	for (int i = 0; i < arr.size(); i++)
		idx++;
	return idx;
}

/*
1) Вычисляю середину массива

*/

bool SearchK(vector<int> arr, int k)
{
	int middleIndex = arr.size() / 2;
	cout << middleIndex;
	return true;
	
}


int main()
{
	vector <int> arr = { 1,2,3};
	if (SearchK(arr, 2))
		cout << "Мы тебя нашли!";

}

