// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let h:number = 4;
// Ouput
for (let i = 1; i <= h; i++) {
    let d:string = "";
    for (let k = 1; k <= h; k++) {
        d += "* ";
    }
    console.log(d);
}
