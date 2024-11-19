function createArrayOfTiers(num) {
    let x='';
    return [...num+''].map((value)=>{
      return x+=value;
    })
} 
function factorial(n){
    let x=1;
    for(let i=n;i>0;i--){
      x=x*i;
    }
    return x;
}
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
function myParseInt(str) {
    return /^\d+$/g.test(str.trim())?+str:NaN;
}