console.log("test");

/* 

Frage

do...while loop

ausgabe in html
    The number is 1 
    ...
    The number is 5
*/

let runden = 0;

do { 
    runden = runden + 1;
    document.write(`DoWile: The number is ${runden} <br>`);

}while(runden < 5);



for (runden = 1; runden < 6; runden = runden + 1){
    document.write(`For: The number is ${runden} <br>`);
}