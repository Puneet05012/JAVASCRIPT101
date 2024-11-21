// I************************ Control Structures in JavaScript **************************

function ifElseExample() {
  let age = 18;

  console.log("\n### if-else Statement Example ###");
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
}

function switchCaseExample() {
  let day = 3;  // Days of the week, where 1 = Monday, 7 = Sunday
  
  console.log("\n### switch-case Statement Example ###");
  switch (day) {
    case 1:
      console.log("Today is Monday.");
      break;
    case 2:
      console.log("Today is Tuesday.");
      break;
    case 3:
      console.log("Today is Wednesday.");
      break;
    case 4:
      console.log("Today is Thursday.");
      break;
    case 5:
      console.log("Today is Friday.");
      break;
    case 6:
      console.log("Today is Saturday.");
      break;
    case 7:
      console.log("Today is Sunday.");
      break;
    default:
      console.log("Invalid day.");
  }
}

function forLoopExample() {
  console.log("\n### for Loop Example ###");
  for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
  }
}

function whileLoopExample() {
  let counter = 0;
  console.log("\n### while Loop Example ###");
  while (counter < 3) {
    console.log(`Counter is: ${counter}`);
    counter++;
  }
}

function doWhileLoopExample() {
  let counter = 0;
  console.log("\n### do-while Loop Example ###");
  do {
    console.log(`Counter is: ${counter}`);
    counter++;
  } while (counter < 3);
}

function displayControlStructure(currentStructure) {
  if (currentStructure === "ifElse") {
    ifElseExample();
  } else if (currentStructure === "switchCase") {
    switchCaseExample();
  } else if (currentStructure === "forLoop") {
    forLoopExample();
  } else if (currentStructure === "whileLoop") {
    whileLoopExample();
  } else if (currentStructure === "doWhileLoop") {
    doWhileLoopExample();
  }
}

displayControlStructure('ifElse');
displayControlStructure('forLoop');
displayControlStructure('whileLoop');
displayControlStructure('doWhileLoop');
