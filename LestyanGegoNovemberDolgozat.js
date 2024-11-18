function crap(x, bags, cap){
  
    let crap = 0;
    
    for (let i = 0; i < x.length; i++){
     for (let j =0; j < x[i].length; j++){
       
       if(x[i][j] === 'D'){
         return 'Dog!!'
       }
       
       if (x[i][j] === '@'){
        crap++
      } 
     }
    }
    
    if (bags >= crap || cap >= crap){
      return 'Clean'
    }
    else{
      return 'Cr@p'
    }
    
}

function highAndLow(numbers){

  var numArray = numbers.split(" ");
  let max= Number(numArray[0]);
  let min= Number(numArray[0]);
  var num;
    
  for(var i = 1; i< numArray.length; i++){
    
    num = Number(numArray[i]);
      
    if(num > max){ max = num};
    if(num < min) {min = num};
  }
    
  return max + " " + min;
  }
function divisors(integer) {
  var divs = [];
    for(var i = 2; i < integer; i++) {
      if(integer % i === 0) {
        divs.push(i);
      }
    } 
    return divs.length ? divs : integer + ' is prime';
};

function findDifference(a, b) {
  return Math.abs(a[1]*a[0]*a[2]-b[1]*b[0]*b[2])
};
