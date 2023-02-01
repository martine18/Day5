//Daily Challenge: 99 Bottles Of Beer


let numbeOfBeers = Number(prompt("How many beers?"));
let numbeOfBeersToTakeAway = 1;


while (numbeOfBeers > 0) {
    const stanza = makeStanza(numbeOfBeers, numbeOfBeersToTakeAway );
    console.log(stanza);
numbeOfBeers = numbeOfBeers -  numbeOfBeersToTakeAway ;
numbeOfBeersToTakeAway =  numbeOfBeersToTakeAway  + 1;
}




function makeStanza(num , counter){ 


const bottleOrBottles = getBottleOrBottles(num);

const stanza = `${num}  ${bottleOrBottles}   

    ${num} ${bottleOrBottles}
    ${counter}

    ${num - counter} ${getBottleOrBottles(num - counter)};
    
`
    
return stanza

}

function isPlural(num){
  if(num >1) {
    return true;
  }  else {
    return false;
  }
}

function getBottleOrBottles(num){
   is (isPlural(num)){
    return "Bottles";
   } else{
   return "Bottles";
}
}


console.log("stanza:", stanza);














