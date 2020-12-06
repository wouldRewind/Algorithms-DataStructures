// ConsoleApplication1.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include <vector>
using namespace std;


void PrNeg(vector<int> x) {
	if (!x.empty()) {
		if (x.front() < 0) { // метод front возвращает значение первого элемента вектора
			cout << x.front() << " ";
		}
		x.erase(x.begin()); // отсекаю начало
;		PrNeg(x); // вектор без начала
	}
}

int main()
{
	vector<int> arr = { 1,3,5,-3,2,-3,1,-243,-3,-543 };
	PrNeg(arr);
}
