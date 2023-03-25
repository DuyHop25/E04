// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
// Ouput
while (Number(N) % 2 == 0) {
    N = Number(N) * 2;
    console.log(N);
}

