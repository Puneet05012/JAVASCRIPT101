console.log("*********************** Setting up JavaScript: Browser and Node.js ****************************");

let environment = "Browser";  // Default environment (can be "Browser" or "Node.js")

function setupJavaScriptEnvironment() {
  console.log("\n### JavaScript in Browser ###");
  if (environment === "Browser") {
    console.log("\n1. Open any browser (Chrome, Firefox, etc.).");
    console.log("2. Press F12 (DevTools) or right-click and select 'Inspect'.");
    console.log("3. Go to the 'Console' tab.");
    console.log("4. Start writing JavaScript directly in the console.");
    console.log("5. Example: Type `let name = 'John'; console.log(name);`");
  }
  
  console.log("\n### JavaScript in Node.js ###");
  if (environment === "Node.js") {
    console.log("\n1. Install Node.js from https://nodejs.org (LTS version recommended).");
    console.log("2. Open terminal and run `node -v` to check if Node.js is installed.");
    console.log("3. Create a `.js` file (e.g., `app.js`).");
    console.log("4. Write JavaScript code in the file.");
    console.log("5. Run the file using the terminal: `node app.js`.");
    console.log("6. Example: Type `console.log('Hello, Node.js!');` in `app.js`.");
  }
}

setupJavaScriptEnvironment();

const vscodeExtensions = [
  "Prettier - Code Formatter",
  "ESLint",
  "JavaScript (ES6) code snippets",
  "Debugger for Chrome",
  "Bracket Pair Colorizer"
];

console.log("\n### Useful VS Code Extensions for JavaScript Development ###");
console.log("To install extensions, follow these steps:");
console.log("1. Open VS Code.");
console.log("2. Go to the Extensions view by clicking the Extensions icon in the Activity Bar.");
console.log("3. Search for the extension name and click 'Install'.\n");

console.log("Suggested Extensions:");
vscodeExtensions.forEach((extension, index) => {
  console.log(`${index + 1}. ${extension}`);
});

console.log("\n### Terminal Commands to Setup JavaScript in Ubuntu ###");
console.log("\n1. Install Node.js in Ubuntu (if not already installed):");
console.log("   $ sudo apt update");
console.log("   $ sudo apt install nodejs");
console.log("   $ sudo apt install npm");
console.log("\n2. Check Node.js and npm version:");
console.log("   $ node -v");
console.log("   $ npm -v");
console.log("\n3. Install VS Code (if not already installed):");
console.log("   $ sudo apt update");
console.log("   $ sudo apt install software-properties-common");
console.log("   $ sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make");
console.log("   $ sudo apt install ubuntu-make");
console.log("   $ umake ide visual-studio-code");

console.log("\nNow you're ready to start coding JavaScript in Browser and Node.js!");
