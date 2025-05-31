export const randomQuotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "First, solve the problem. Then, write the code",
    "In case of fire: git commit, git push, leave building.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
    "JavaScript: The language that gives you undefined joy and unexpected errors!"
];

export const easySection = [
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        options: ["print('Hello World')", "console.log('Hello World')", "echo('Hello World')", "document.writeConsole('Hello World')"],
        answer: "console.log('Hello World')"
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "let", "both var and let"],
        answer: "both var and let"
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "##", "//", "/* */"],
        answer: "//"
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunc()", "def myFunc()", "func myFunc()", "create function myFunc()"],
        answer: "function myFunc()"
      },
      {
        question: "What does the 'typeof' operator do?",
        options: ["Returns data type of a variable", "Defines a new type", "Changes variable type", "None of the above"],
        answer: "Returns data type of a variable"
      },
      {
        question: "Which of the following is a boolean value?",
        options: ["0", "true", "'false'", "null"],
        answer: "true"
      },
      {
        question: "What is the output of: console.log(2 + '2')?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22"
      },
      {
        question: "How do you write an if statement in JavaScript?",
        options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i equals 5"],
        answer: "if (i == 5)"
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
      },
      {
        question: "How do you write a loop that runs 5 times?",
        options: [
          "for (let i = 0; i < 5; i++)",
          "for (i <= 5; i++)",
          "loop i = 1 to 5",
          "while (i < 5; i++)"
        ],
        answer: "for (let i = 0; i < 5; i++)"
      },
      {
        question: "Which value is NOT falsy in JavaScript?",
        options: ["0", "false", "''", "'0'"],
        answer: "'0'"
      },
      {
        question: "Which method converts JSON text to a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
        answer: "JSON.parse()"
      },
      {
        question: "Which operator checks for both value and type?",
        options: ["==", "===", "!=", "="],
        answer: "==="
      },
      {
        question: "What is the default value of an uninitialized variable?",
        options: ["null", "0", "undefined", "false"],
        answer: "undefined"
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "String", "Character", "Boolean"],
        answer: "Character"
      },
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Digital Object Maker", "Document Order Method"],
        answer: "Document Object Model"
      },
      {
        question: "How can you add a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
        answer: "// comment"
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "shift()", "splice()", "slice()"],
        answer: "pop()"
      },
      {
        question: "What will `typeof null` return?",
        options: ["'null'", "'undefined'", "'object'", "'false'"],
        answer: "'object'"
      },
      {
        question: "Which keyword stops a loop in JavaScript?",
        options: ["exit", "stop", "return", "break"],
        answer: "break"
      }
];

export const mediumSection = [
    {
      question: "What is the result of: [1, 2, 3].map(num => num * 2)?",
      options: ["[2, 4, 6]", "[1, 4, 9]", "[1, 2, 3, 6]", "undefined"],
      answer: "[2, 4, 6]"
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      options: ["let", "var", "const", "define"],
      answer: "const"
    },
    {
      question: "What does the 'this' keyword refer to in a regular function (non-arrow) by default?",
      options: ["Global object", "Function itself", "Parent function", "Window only in strict mode"],
      answer: "Global object"
    },
    {
      question: "Which array method returns true if **any** element passes the test?",
      options: ["every()", "filter()", "some()", "map()"],
      answer: "some()"
    },
    {
      question: "Which method is used to merge two or more arrays?",
      options: ["combine()", "merge()", "concat()", "append()"],
      answer: "concat()"
    },
    {
      question: "What will `const a = [1]; const b = [1]; a == b` return?",
      options: ["true", "false", "undefined", "NaN"],
      answer: "false"
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to the parent scope",
        "A variable that is private",
        "A loop that closes automatically",
        "An arrow function"
      ],
      answer: "A function having access to the parent scope"
    },
    {
      question: "What does the spread operator (`...`) do?",
      options: [
        "Copies object by reference",
        "Merges two variables",
        "Expands iterable into elements",
        "Creates deep copies"
      ],
      answer: "Expands iterable into elements"
    },
    {
      question: "What is the default value of 'this' inside an arrow function?",
      options: ["global object", "window", "undefined", "lexical scope of parent"],
      answer: "lexical scope of parent"
    },
    {
      question: "Which array method is used to flatten a nested array in ES6+?",
      options: ["reduce()", "flat()", "map()", "join()"],
      answer: "flat()"
    },
    {
      question: "What is the output of `'2' + 2 - 1`?",
      options: ["21", "NaN", "undefined", "12"],
      answer: "21"
    },
    {
      question: "How do you make an object immutable?",
      options: ["Object.freeze()", "Object.lock()", "const obj", "freeze(obj)"],
      answer: "Object.freeze()"
    },
    {
      question: "Which method is used to delay execution in asynchronous code?",
      options: ["wait()", "setTimeout()", "setInterval()", "delay()"],
      answer: "setTimeout()"
    },
    {
      question: "What does `Promise.all()` do?",
      options: [
        "Returns the first resolved promise",
        "Waits for all promises to resolve or reject",
        "Returns a single promise with fastest result",
        "Only works with one promise"
      ],
      answer: "Waits for all promises to resolve or reject"
    },
    {
      question: "What is hoisting in JavaScript?",
      options: [
        "Reordering HTML tags",
        "Lifting DOM elements",
        "Moving variable and function declarations to the top",
        "Removing unused code"
      ],
      answer: "Moving variable and function declarations to the top"
    },
    {
      question: "What does `Array.from('hello')` return?",
      options: ["['hello']", "[h, e, l, l, o]", "Error", "[1, 2, 3]"],
      answer: "['h', 'e', 'l', 'l', 'o']"
    },
    {
      question: "Which function converts a number to a string?",
      options: ["toStr()", "String()", "numToStr()", "textify()"],
      answer: "String()"
    },
    {
      question: "What is the output of `typeof NaN`?",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      answer: "'number'"
    },
    {
      question: "Which of the following is NOT a valid JavaScript loop?",
      options: ["for", "foreach", "while", "do...while"],
      answer: "foreach"
    },
    {
      question: "Which operator can be used to clone an object?",
      options: ["clone()", "=", "...", "*"],
      answer: "..."
    }
  ];
  
export const hardSection = [
    {
      question: "What is the output of `await Promise.resolve(5)` inside an async function?",
      options: ["Promise", "5", "undefined", "Error"],
      answer: "5"
    },
    {
      question: "Which of the following best describes the Event Loop in JavaScript?",
      options: [
        "It processes synchronous code only",
        "It blocks execution for async tasks",
        "It manages the call stack and task queue",
        "It loops over every variable"
      ],
      answer: "It manages the call stack and task queue"
    },
    {
      question: "What will the following log? `console.log(0.1 + 0.2 === 0.3)`",
      options: ["true", "false", "undefined", "NaN"],
      answer: "false"
    },
    {
      question: "What is a WeakMap primarily used for?",
      options: [
        "Mapping strings to values",
        "Preventing memory leaks by not preventing garbage collection",
        "Fast lookup of primitive keys",
        "Iterating over large data sets"
      ],
      answer: "Preventing memory leaks by not preventing garbage collection"
    },
    {
      question: "Which keyword is used to catch errors in async/await syntax?",
      options: ["error", "try/catch", "handle", "await.catch()"],
      answer: "try/catch"
    },
    {
      question: "What is a debounce function used for?",
      options: [
        "To combine multiple functions",
        "To delay a function call until no repeated calls happen",
        "To cache a function's result",
        "To call a function immediately"
      ],
      answer: "To delay a function call until no repeated calls happen"
    },
    {
      question: "What is tail call optimization?",
      options: [
        "A method to convert recursion to iteration",
        "A feature that optimizes nested loops",
        "Optimizing function calls at the end of a function",
        "None of the above"
      ],
      answer: "Optimizing function calls at the end of a function"
    },
    {
      question: "Which object holds all module-scoped variables in ES Modules?",
      options: ["global", "module", "exports", "none"],
      answer: "none"
    },
    {
      question: "What is the result of `[] == ![]`?",
      options: ["true", "false", "undefined", "Error"],
      answer: "true"
    },
    {
      question: "How is memory managed in JavaScript?",
      options: [
        "Manual memory management",
        "Garbage collection based on reachability",
        "Through malloc and free functions",
        "Using memory tokens"
      ],
      answer: "Garbage collection based on reachability"
    },
    {
      question: "What is the output of `'use strict'; x = 10; console.log(x);`?",
      options: ["10", "undefined", "ReferenceError", "SyntaxError"],
      answer: "ReferenceError"
    },
    {
      question: "What is the purpose of Symbol in JavaScript?",
      options: [
        "To create unique identifiers",
        "To declare constants",
        "To optimize code execution",
        "To represent big numbers"
      ],
      answer: "To create unique identifiers"
    },
    {
      question: "What is a generator function in JavaScript?",
      options: [
        "A function that returns multiple values at once",
        "A function that can pause and resume",
        "A function that runs in background",
        "An async function only"
      ],
      answer: "A function that can pause and resume"
    },
    {
      question: "Which one is a valid way to clone an object deeply in ES6+?",
      options: ["Object.assign()", "JSON.parse(JSON.stringify(obj))", "spread operator", "Object.copy()"],
      answer: "JSON.parse(JSON.stringify(obj))"
    },
    {
      question: "What is the output of `typeof function* () {}`?",
      options: ["'function'", "'object'", "'generator'", "'undefined'"],
      answer: "'function'"
    },
    {
      question: "Which design pattern is often used with closures in JavaScript?",
      options: ["Observer", "Factory", "Module", "Decorator"],
      answer: "Module"
    },
    {
      question: "Which statement about `setTimeout` with `0ms` delay is correct?",
      options: [
        "It executes immediately",
        "It blocks the call stack",
        "It waits for the current call stack to clear",
        "It never runs"
      ],
      answer: "It waits for the current call stack to clear"
    },
    {
      question: "Which is true about `Object.seal()`?",
      options: [
        "Prevents adding and removing properties",
        "Allows property modification but not addition",
        "Makes object immutable",
        "Same as Object.freeze()"
      ],
      answer: "Allows property modification but not addition"
    },
    {
      question: "What will `new String('abc') == 'abc'` return?",
      options: ["true", "false", "undefined", "Error"],
      answer: "true"
    },
    {
      question: "Which feature does optional chaining `?.` provide?",
      options: [
        "Throws an error if undefined",
        "Skips null/undefined safely",
        "Creates a backup variable",
        "Removes null values"
      ],
      answer: "Skips null/undefined safely"
    }
  ];
  