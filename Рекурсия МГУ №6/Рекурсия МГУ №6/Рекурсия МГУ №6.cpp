// Рекурсия МГУ №6.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
// Обобщил задачу приписыванием цифры от 0 до 9, Обобщил для произвольный системы счисления

#include <iostream>
using namespace std;

int numLen(int num, int cc) { // функция, вычисляющая количество цифр в числе
    return num < cc ? 1 : 1 + numLen(num / cc, cc); // тернарник
}

int HeadN(int num,int N,int cc) // num - число, к которому приписывают, N - число, которое приписывает, cc - система счисления
{
    return N * pow(cc, (numLen(num, cc))) + num;
}



int main()
{
    cout << HeadN(352,3,10);
}

