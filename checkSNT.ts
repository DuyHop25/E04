// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
let dem:number = 0 ;
// Ouput
for (let i = 1; i <= N; i++) {
    if(Number(N) % i == 0 )
        dem++;
}
if(dem == 2)
    console.log("Yes");
else    
    console.log("No");

