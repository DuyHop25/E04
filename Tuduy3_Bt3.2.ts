// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
// Ouput
for (let i = 1; i <= N; i++) {
    if( Number(N) % i == 0)
        console.log(i);
}