

<<<<<<< HEAD
function dwarfRollCall(dwarves) {
  var dwarvesSlot = [];
if (dwarves.length > 0) {
for (let i = 0; dwarves.length > i; i++){
  dwarvesSlot.push(i+1 + ". " + dwarves[i]);
  }
 return `${dwarvesSlot.join(' ' + '')} `
}
}

function summonCaptainPlanet(planeteerCalls) {
var summonList = [];
if (planeteerCalls.length > 0) {
for (var i = 0; planeteerCalls.length > i; i++){
summonList.push(planeteerCalls[i].toUpperCase() + "!");

    }

return summonList;
}
}
=======


>>>>>>> 5370f3767a795e42ca6412e48810ffd99de07bbb
/*
This function should accept an array of dwarf names, for instance:

```js
["Doc", "Dopey", "Bashful", "Grumpy"]
```

It should then return a string with the numbered dwarves. The string should look like this:
*/
<<<<<<< HEAD

function longPlaneteerCalls(calls) {

if (calls.length > 0) {

for (var i = 0; calls.length > i; i++) {
      if (calls[i].length > 4) {return true;}
      else {
        return false;
      }
}
=======
>>>>>>> 5370f3767a795e42ca6412e48810ffd99de07bbb

}

}

function findTheCheese(foods) {
<<<<<<< HEAD
//console.log("foods", foods);
if (foods.length > 0) {
  for (var i = 0; foods.length > i; i++) {
  if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert")
  {return foods[i];
}

}
return "no cheese!" ;
=======
console.log("foods", foods);
if (foods.length > 0) {
  for (var i = 0; foods.length > i; i++) {
  if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] ==="camembert")
  {return foods[i];
}
else {
  return "no cheese!" ;
}
}
>>>>>>> 5370f3767a795e42ca6412e48810ffd99de07bbb
}
}
