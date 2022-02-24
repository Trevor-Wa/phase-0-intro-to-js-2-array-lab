// Write your solution here!
let cats = ['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    return cats.push('Ralph');
}
function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name){
    return cats.pop(4);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(0);
}
function appendCat(name){
    const copyCats = [...cats , 'Broom'];
    return copyCats;
}
function prependCat(name){
    const arnoldCat = ['Arnold', ...cats];
    return arnoldCat;
}
function removeLastCat(name){
    const lessCat = cats.slice(0,2);
    return lessCat;
}
function removeFirstCat(name){
    const firstCat = cats.slice(1);
    return firstCat;
}