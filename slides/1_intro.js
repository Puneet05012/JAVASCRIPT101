const string = "Introduction to Javascript";
console.log("Welcome to the Session 1 :",string);

// ***************************** JavaScript != JAVA *********************************

/* JAVA 

    - Designed as a general-purpose programming language for large-scale, platform-independent applications.
    - Used in Android apps, enterprise systems, and backend services.

    ### FUN FACT : Netscape, the company behind JavaScript, named it JavaScript as a marketing strategy to ride on Java’s popularity. ###

    - JavaScript and Java are not related. They serve different purposes, have different syntax, and run in different environments.

    - Java is like a heavy-duty SUV: powerful and suited for large, complex tasks.
    - JavaScript is like a sports car: lightweight and perfect for fast, interactive tasks.

*/

function jsIntro(){
    console.log('************************ JS Intro ************************');


    const javascriptFeatures = {
        'type' : 'Prototype-based scripting',
        'platform' : 'Browser (client-side) or Node.js (server-side)',
        'typing' : 'Dynamically typed',
        'syntax' : 'Flexible (no type declarations)',
        'Use Case' : 'Web interactivity, full-stack development',
    
        describeFeatures: function () {
            console.log(`JavaScript is a ${this.type} language.`);
            console.log(`It runs on the ${this.platform}.`);
            console.log(`It uses ${this.typing} and has ${this.syntax} syntax.`);
            console.log(`Its main use case is: ${this.useCase}`);
        }
    }
    
    const advancedJSFeatures = Object.create(javascriptFeatures);
    
    advancedJSFeatures.advancedFeature = 'Supports asynchronous programming';
    
    advancedJSFeatures.describeFeatures();
    
    console.log(`Advanced feature: ${advancedJSFeatures.advancedFeature}`);


    console.log('************************ JS Intro ************************');
}

jsIntro();

const jsHistory = () => {
    console.log('************************ JS History ************************');

    
    const javascriptHistory = {
        '1995': 'JavaScript is created (Netscape)',
        '1997': 'ECMAScript 1 (standardization)',
        '2005': 'AJAX brings dynamic web apps',
        '2009': 'Node.js launches',
        '2015': 'ES6 modernizes JavaScript',
        '2024': 'JavaScript powers the web!',
    }

    console.log(javascriptHistory);

    // alert("Welcome to the web!");                           -> old js (1995)

    // fetch("https://api.example.com/data")                   -> modern js (2024)
    //     .then(response => response.json())
    //     .then(data => console.log("Dynamic Data:", data));

    console.log('************************ JS History ************************');
}

jsHistory();

const jsVsPhp = () => {
    const jsVsPhpComparison = {
        VariableDeclaration: {
          JavaScript: "let/const/var",
          PHP: "$ followed by variable name",
        },
        Functions: {
          JavaScript: "No need to declare global explicitly",
          PHP: "Use global for global variables",
        },
        LoopSyntax: {
          JavaScript: "Similar syntax to PHP",
          PHP: "Similar syntax to JavaScript",
        },
        DynamicTyping: {
          JavaScript: "Type changes dynamically using typeof",
          PHP: "Type changes dynamically using gettype",
        },
        AssociativeArrays: {
          JavaScript: "Objects with dot or bracket notation",
          PHP: "Arrays with associative keys",
        },
      
        displayComparisons: function () {
          console.log("********************** JavaScript vs PHP Comparison **********************");
          for (let [feature, comparison] of Object.entries(this)) {
            if (typeof comparison === "object") {
              console.log(`\nFeature: ${feature}`);
              console.log(`  JavaScript: ${comparison.JavaScript}`);
              console.log(`  PHP: ${comparison.PHP}`);
            }
          }
        },
      
        getFeatureComparison: function (feature) {
          if (this[feature]) {
            console.log(`\n=== Feature: ${feature} ===`);
            console.log(`JavaScript: ${this[feature].JavaScript}`);
            console.log(`PHP: ${this[feature].PHP}`);
          } else {
            console.log(`Feature "${feature}" not found in the comparison.`);
          }
        },
    };
      
    jsVsPhpComparison.displayComparisons();
}

jsVsPhp();


