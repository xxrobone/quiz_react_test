# Hi there 👋 

## This is a quiz app, it's built with react using tests 

The functionality is to use mockData, with questions and 4 alternatives / choices to choose from with only one being right and 3 being wrong answers, 
after the questions have all been submitted show a score and answers for which questions was correct or wrong

It's a basic create-react-app project and I've used basic jsx and sass for styling in this project 

All tests can be found in the /src/__test__ dir

# Components and Features to include
- Header (with a title)
- Quiz component, handles state for currentQuiz, selectedAnswers and score, its is the wrapper for QuizHeader & QuizQuestions, passes the data
    - QuizHeader component is where the question is shown as title, passed in as props from data
    - QuizQuestion, handles submit and is a list wrapper for QuizChoices rendering the choices, passed in as props from data
- QuizChoice component should contain a choice ex, li with input and label, takes in props from data

// not ready yet...

## Available Scripts

In the project directory, you can run:

```sh
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```sh
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


There should be data for this project and I'll give it here to make it easier
```
[
  {
    question: 'What does HTML stand for?',
    a: 'Hyper Mouse Lightning',
    b: 'Hypertext Markdown Language',
    c: 'Hypertext Markup Language',
    d: 'Hypertext Markymark Language',
    correct: 'c',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Cool sassy style',
    b: 'Cascading sassy sheets',
    c: 'Cascading style sheets',
    d: 'Cascading sheets style',
    correct: 'c',
  },
  {
    question: 'Which language runs in the web browser?',
    a: 'JAVA',
    b: 'Python',
    c: 'C#',
    d: 'Javascript',
    correct: 'd',
  },
  {
    question: 'How does a computer understand javascript?',
    a: 'With the help of integers',
    b: 'With the help of vs code',
    c: 'With help of the web browser',
    d: 'With the help of a compiler',
    correct: 'd',
  },
  {
    question: 'When was the first workable internet tested?',
    a: '1980',
    b: '1960',
    c: '2000',
    d: '1990',
    correct: 'b',
  },
]
```