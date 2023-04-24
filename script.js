const origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function (event) {
    // put original array into textboxes
    fillTextBoxes(origArray);

    // apply anonymous onclick function to btn2
    document.getElementById("btn2").onclick = function() {
        let cubedArray = origArray.map(function(value) {return value*value*value}); // also stuck anon function in array.map()
        fillTextBoxes(cubedArray);
    };

    // apply named onclick function to btn3
    document.getElementById("btn3").onclick = btn3Function;
});

function fillTextBoxes(array) {
    document.getElementById("box1").value = array[0];
    document.getElementById("box2").value = array[1];
    document.getElementById("box3").value = array[2];
}


function btn1Function() {
    let squaredArray = origArray.map(value => value*value); // using lambda, my preferred method for small functions
    fillTextBoxes(squaredArray);
}

function btn3Function() {
    let fourthPoweredArray = origArray.map(value => raiseToFourthPower(value)); // also stuck named function in array.map()
    fillTextBoxes(fourthPoweredArray);
}

// named function definition using a variable
raiseToFourthPower = function(number) {
    return number*number*number*number;
}
