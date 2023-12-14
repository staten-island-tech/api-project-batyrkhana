const dennis = {
    name: "Dennis", //string
    age: 16, //Integer
};
console.log(12 + "13");
console.log(12 + Number("13"));
console.log(dennis.name);
let x = Array.from(dennis.name);
console.log(x);

//use a for loop to go though a string
for(let i = 0; i<dennis.name.length; i++){
    console.log(dennis.name[i]);
};

//use a while loop to go though a string
let i = 0;
while(i< dennis.name.length){
    console.log(dennis.name[i]);
    i++;
};

function needle(name, search){
    if(name.includes(search)) {
        return true;
    } else {
        return false;
    }
};
console.log(needle(dennis.name, "D"));
// combine two strings
function sortString(name) {
    let x = [...name].sort ();
    console.log(x);
};
sortString("ablkslskdhfdlkfh");
let x = [1,2,3];
let y = [4,5,6]; //spread operator ...
let z = [...x, ...y];
x = [...x, ...y];
console.log(x);

//splice

function removeL(name) {
    let x = Array.from(name);
    x.splice(-1);
    console.log(x);
};
//me and ashton