// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
// Ouput
for (let i = 2; i <= N; i+=2) {
    console.log(i)
}