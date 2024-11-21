// ************************ Javascript Data Type ***********************


const jsDatatypes = {
    // Primitive Datatypes
    primitive: {
      string: "A sequence of characters", // e.g., "Hello, World!"
      number: 42, // e.g., Integer, Float
      boolean: true, // e.g., true or false
      null: null, // A special value representing "nothing"
      undefined: undefined, // A variable declared but not assigned
    },
  
    // Non-Primitive Datatypes
    nonPrimitive: {
      object: {
        name: "Object",
        type: "Used to group related data and behavior",
      },
      array: ["Item1", 2, "Item3"], 
      functionExample: function () {
        return "Functions are first-class citizens of JS!";
      },
    },
  
    displayPrimitives: function () {
      console.log("Primitive Data Types:");
      for (let key in this.primitive) {
        console.log(`${key}:`, this.primitive[key]);
      }
    },
  
    displayNonPrimitives: function () {
      console.log("\nNon-Primitive Data Types:");
      for (let [key, value] of Object.entries(this.nonPrimitive)) {
        console.log(`${key}:`, value);
      }
    },
};
console.log("************************* JavaScript Datatypes *************************");
jsDatatypes.displayPrimitives();
jsDatatypes.displayNonPrimitives();
console.log("************************* JavaScript Datatypes *************************");


function explainNullAndUndefined() {
    console.log("********************* Null vs Undefined **************************");

    let undefinedVariable; // Variable declared but not assigned
    let nullValue = null;  // Explicitly set to 'nothing'

    console.log("undefinedVariable:", undefinedVariable); 
    console.log("nullValue:", nullValue); 

    console.log(`
        Key Differences:
        1. 'undefined' means a variable is declared but not assigned.
        2. 'null' is explicitly set to represent 'no value' or 'empty.'
    `);
    console.log("********************* Null vs Undefined **************************");
}

explainNullAndUndefined();
  