//**********************create array with questions************** */
// questions and answers courtesy of w3schools :https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS

var myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?\n <p id= 'demo'>This is a demonstration.</p>",
    answers: {
      a: "document.getElementById('Demo').innerHTML = 'Hello World';",
      b: "document.getElement('p').innerHTML = 'Hello World';",
      c: "#demo.innerHTML = 'Hello World';",
      d: "document.getElementByName('p').innerHTML = 'Hello World';",
    },
    correctAnswer: "a",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "The <head> section",
      b: "Both the <head> section and the <body section",
      c: "The <body> section",
      d: "The <header> section",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: {
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'",
      c: "<script id='xxx.js>",
      d: "<script src='xxx.js'>",
    },
    correctAnswer: "d",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      a: "msgBox('Hello World');",
      b: "alert('Hello World');",
      c: "msg('Hello World');",
      d: "alertBox('Hello World');",
    },
    correctAnswer: "b",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function =myFunction()",
      b: "function myFunction()",
      c: "function: myFunction()",
      d: "function.myFunction()",
    },
    correctAnswer: "a",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      a: "call function.myFunction()",
      b: "myFunction()",
      c: "call myFunction()",
      d: "function.myFunction()",
    },
    correctAnswer: "b",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      a: "if (i==5)",
      b: "if i == 5 then",
      c: "if i = 5 then",
      d: "if (i = 5)",
    },
    correctAnswer: "a",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: {
      a: "if (i<>5)",
      b: "if i<>5",
      c: "if i=!5 then",
      d: "if (i!=5)",
    },
    correctAnswer: "d",
  },
  {
    question: "How does a WHILE loop start?",
    answers: {
      a: "while i = 1 to 10",
      b: "while (i<=10; i++)",
      c: "while (i<=10)",
      d: "While (i = 1++)",
    },
    correctAnswer: "b",
  },
  {
    question: "How does a FOR loop start?",
    answers: {
      a: "for i=1 to 5",
      b: "for (i<+5; i++)",
      c: "for(i=0; i<=5)",
      d: "for (i=0; i<=5; i++)",
    },
    correctAnswer: "d",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: {
      a: "<!--This is a comment-->",
      b: "'This is a comment",
      c: "//This is a comment",
      d: "/*This is a comment*/",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: {
      a: "var colors = 1 =('red'), 2 = ('green'), 3 = ('blue')",
      b: "var colors = (1:'red', 2:'green'; 3:'blue')",
      c: "var colors = 'ReadableStream', 'green', 'blue'",
      d: "var colors =['red', 'green', 'blue']",
    },
    correctAnswer: "d",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: {
      a: "Math.round(7.25)",
      b: "rnd(7.25)",
      c: "round(7.25)",
      d: "Math.rnd(7.25)",
    },
    correctAnswer: "a",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: {
      a: "onmouseClick",
      b: "onclick",
      c: "onchange",
      d: "onmouseover",
    },
    correctAnswer: "b",
  },
];
