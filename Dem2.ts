// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let m:number = 10;
let n:number = 20;
let dem:number = 0;
// Ouput
for (let i = m; i <= n; i++) {
    if(i%2==0)
        dem++;
}
console.log(dem);

