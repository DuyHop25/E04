// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let m: Number = Number(question("Nhap mot so nguyen: "));
let dem:number = 0 ;
// Ouput
let flag: boolean = true;
for(let i = 1; i <= m; i++){
    flag = true;
    for(let j = 2 ; j <= Math.sqrt(i) ; j++){
        if(Number(i) % j == 0 ){
            flag = false;
        } 
    }
    if(flag == true){
        console.log(i);
    }
}

