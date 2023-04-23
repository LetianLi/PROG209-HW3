# PROG209-HW3

## Intent:

Write an html / JavaScript program that demonstrates you understand 2 things:
1. You know how to make buttons execute JavaScript code each of 3 different ways
    1. using the onclick property in the button element definition
    2. By adding an eventlistener function in the JavaScript using an anonymous function
    3. By adding an eventlistener function in the JavaScript which calls a function by name
    - (if you don’t understand the 3 ways, do some searching on the web)
2. You know how to code using the array.map() capability.

## Instructions:

Write an html page that has 3 text boxes.

Add 3 button’s but only the first one should use the onclick= way of running a JavaScript function. The 2nd and 3rd buttons must have their click events defined in the JavaScript.

Edit your JavaScript file to:
1. Define an array in the JavaScript: origArray = [2,3,4];
2. add an addEventListener for the DOMContentLoaded and in that,
    - write the values of the origArray into the 3 textboxes.
    - add 2 event listener sections for the 2nd and 3rd buttons.
        - The 2nd one must do it using an anonymous function.
        - The 3rd one must call a function by name.
3. Now write the code for the function called by the first button. It must use the array.map capability to make a new array where the values of each element are the square of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.
4. Now write the code for the anonymous function in the 2nd button’s click event handler. It must use the array.map capability to make a new array where the values of each element are the cube of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.
5. Now write the code for the named function in the 3rd button’s click event handler. It must use the array.map capability to make a new array where the values of each element are the 4th power of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.
