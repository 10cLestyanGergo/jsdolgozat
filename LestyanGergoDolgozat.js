function isLeapYear(year) {
    let megoldas=false;
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                megoldas=true;
            }
            else{
                megoldas=false;
            }
        }
        else{
            megoldas=true;
        }
    }
    else{
        megoldas=true;
    }
    return megoldas;
}

function stonePaperScissors(player1, player2) {
    let gyoztes='';
    if(player1==0){
        if(player2==0){
            gyoztes+='The game is a tie.';
        }
        else if(player2==1){
            gyoztes+='The first player wins.';
        }
        else if(player2==2){
            gyoztes+='The second player wins.';
        }
        else{
            gyoztes+="Rossz bevitt adat";
        }
    }
    else if(player1==1){
        if(player2==1){
            gyoztes+='The game is a tie.';
        }
        else if(player2==2){
            gyoztes+='The first player wins.';
        }
        else if(player2==0){
            gyoztes+='The second player wins.';
        }
        else{
            gyoztes+="Rossz bevitt adat";
        }
    }
    else if(player1==2){
        if(player2==2){
            gyoztes+='The game is a tie.';
        }
        else if(player2==0){
            gyoztes+='The first player wins.';
        }
        else if(player2==1){
            gyoztes+='The second player wins.';
        }
        else{
            gyoztes+="Rossz bevitt adat";
        }
    }
    else {
        console.log("Rossz bevitt adat");
    }
    return gyoztes;
}
function cuboid(a, b, c) {
    let felszinterfogat='';
    if(a>=0||b>=0||c>=0){
        felszinterfogat+="Rossz adat, a téglatest felszíne 0"
    }
    else{
        felszinterfogat=(2*(a*b+a*c+b*c)+" a felszíne a téglatestnek "+a*b*c+" a térfogata a téglatestnek")
    }

}
function fizzbuzz(number) {
    let sorozat='';
    for(let i=1;i<=number;i++){
        if(i%3==0){
            if(i%5==0){
                sorozat+="fizzbuzz, ";
            }
            else{
                sorozat+="fizz, ";
            }
        }
        else if(i%5==0){
            if(i%3!=0){
                sorozat+="buzz, ";
            }
        }
        else{
            sorozat+=i+", ";
        }
    }
    return sorozat;
}

console.log(fizzbuzz(15))