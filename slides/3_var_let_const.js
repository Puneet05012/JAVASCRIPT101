// ************************* var, let and const ***************************

// ### Scope 
function scopeExample() { 
    if (true) {
      var varVariable = "I am var"; // Function-scoped
      let letVariable = "I am let"; // Block-scoped
      const constVariable = "I am const"; // Block-scoped
    }
    console.log("varVariable:", varVariable); // Accessible
    console.log("letVariable:", letVariable); // Error: letVariable is not defined
    console.log("constVariable:", constVariable); // Error: constVariable is not defined
}

scopeExample();


//  ### Hoisting
const hoisting = () => {
    try {
        console.log(varHoist); // undefined (var is hoisted)
        var varHoist = "I am hoisted";
    
        console.log(letHoist); // Error: Cannot access 'letHoist' before initialization
        let letHoist = "I am not hoisted";
    
        console.log(constHoist); // Error: Cannot access 'constHoist' before initialization
        const constHoist = "I am not hoisted";
    } catch (error) {
        console.log('Error in hoisting: ',error);
    }
}

hoisting();

// ### Re-declaration and Re-assignment
const reDeclareAndAssign = () => {
    try {
        var varVariable = "Original var";
        var varVariable = "Re-declared var"; // Allowed
        console.log("varVariable:", varVariable);
    
        let letVariable = "Original let";
        // let letVariable = "Re-declared let"; // Error: Cannot re-declare 'letVariable'
        letVariable = "Re-assigned let"; // Allowed
        console.log("letVariable:", letVariable);
    
        const constVariable = "Original const";
        // const constVariable = "Re-declared const"; // Error: Cannot re-declare 'constVariable'
        // constVariable = "Re-assigned const"; // Error: Cannot re-assign a constant
        console.log("constVariable:", constVariable);
    } catch (error) {
        console.log('Error in reDeclareAndAssign: ',error);
    }
}

reDeclareAndAssign();

// ### Temporal Dead Zone
function tdzExample() {
    try {
        console.log(letInTDZ); // Error: Cannot access 'letInTDZ' before initialization
        let letInTDZ = "I exist only after declaration";
        console.log(letInTDZ);
    } catch (error) {
        console.log('TDZ :',error);
    }
}

tdzExample();

function conclusion() {
    console.log(`
        1. var: Function-scoped, hoisted, allows re-declaration, and re-assignment.
        2. let: Block-scoped, not hoisted (Temporal Dead Zone), allows re-assignment but not re-declaration.
        3. const: Block-scoped, not hoisted, does not allow re-declaration or re-assignment.
    `);
}

conclusion();