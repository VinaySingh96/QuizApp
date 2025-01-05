export const MOCK_FRONTEND_QUESTIONS = [
  {
    id: 0,
    question: `
              <div>
                <p><strong>Which of the following animals is the fastest?</strong></p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfubfKyfvfFV05VPL-h_f-0UILmzxjbF2-GQ&s" alt="Cheetah" />
                <ul>
                  <li>Cheetah</li>
                  <li>Elephant</li>
                  <li>Lion</li>
                  <li>Horse</li>
                </ul>
              </div>
            `,
    options: ['Cheetah', 'Elephant', 'Lion', 'Horse'],
    correctAnswer: 'Cheetah',
  },
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question:
      'What is the output of the following JavaScript code? \n`console.log(0.1 + 0.2 === 0.3)`',
    options: ['true', 'false', 'undefined', 'NaN'],
    correctAnswer: 'false',
  },
  {
    id: 3,
    question:
      'In JavaScript, which of the following methods is used to debounce a function?',
    options: [
      'setTimeout',
      'setInterval',
      'clearTimeout',
      'A custom debounce implementation',
    ],
    correctAnswer: 'A custom debounce implementation',
  },
  {
    id: 4,
    question:
      'What will be the value of `this` inside an arrow function in JavaScript?',
    options: [
      "The function's own context",
      'The context of the enclosing scope',
      'undefined',
      'null',
    ],
    correctAnswer: 'The context of the enclosing scope',
  },
  {
    id: 5,
    question:
      'Which hook is used in React to optimize performance by memoizing computed values?',
    options: ['useMemo', 'useCallback', 'useEffect', 'useRef'],
    correctAnswer: 'useMemo',
  },
  {
    id: 6,
    question: 'How does the Virtual DOM in React improve performance?',
    options: [
      "It bypasses the browser's DOM entirely.",
      'It directly modifies the real DOM.',
      'It minimizes the number of direct DOM manipulations.',
      'It uses Web Workers to render components.',
    ],
    correctAnswer: 'It minimizes the number of direct DOM manipulations.',
  },
  {
    id: 7,
    question:
      'What is the time complexity of the `.filter()` method in JavaScript for an array of size n?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    correctAnswer: 'O(n)',
  },
  {
    id: 8,
    question: 'In CSS Grid, what does the `fr` unit represent?',
    options: [
      'Fixed ratio',
      'Fraction of available space',
      'Flexible rows',
      'Fractional height',
    ],
    correctAnswer: 'Fraction of available space',
  },
  {
    id: 9,
    question:
      "Which of the following statements about React's `Context API` is true?",
    options: [
      'It replaces Redux entirely for state management.',
      'It allows sharing state across the component tree without prop drilling.',
      'It improves performance by reducing re-renders.',
      'It is used to fetch data from APIs.',
    ],
    correctAnswer:
      'It allows sharing state across the component tree without prop drilling.',
  },
];

export const testResults = [
  {
    id: 1,
    title: 'JavaScript Basics',
    description: 'An introductory chapter to JavaScript programming.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    totalMarks: 100,
    marksObtained: 85,
    duration: '1 hour',
    passingMarks: 40,
    date: '2025-01-01',
  },
  {
    id: 2,
    title: 'Vue.js Fundamentals',
    description: 'Understanding the core concepts of Vue.js.',
    imageUrl: 'https://vuejs.org/images/logo.png',
    totalMarks: 100,
    marksObtained: 90,
    duration: '1 hour 30',
    passingMarks: 45,
    date: '2025-01-02',
  },
  {
    id: 3,
    title: 'Node.js Essentials',
    description: 'This chapter covers the basics of Node.js and its ecosystem.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jqy_joxyuPEsHWadt48KNQE0WcRK4j40RQ&s',
    totalMarks: 100,
    marksObtained: 75,
    duration: '1 hour',
    passingMarks: 35,
    date: '2025-01-03',
  },
  {
    id: 4,
    title: 'Python for Beginners',
    description: 'A beginner-friendly guide to Python programming.',
    imageUrl:
      'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png',
    totalMarks: 100,
    marksObtained: 88,
    duration: '1 hour 15',
    passingMarks: 40,
    date: '2025-01-04',
  },
  {
    id: 8,
    title: 'Database Management with SQL',
    description:
      'A deep dive into SQL database management and query optimization.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    totalMarks: 100,
    marksObtained: 95,
    duration: '2 hours',
    passingMarks: 50,
    date: '2025-01-08',
  },
  {
    id: 9,
    title: 'GraphQL Basics',
    description: 'Learn how to use GraphQL for querying APIs.',
    imageUrl:
      'https://i.pinimg.com/originals/66/ec/d4/66ecd45c7b6a7a76cd3c2c1e16b14ea0.png',
    totalMarks: 100,
    marksObtained: 65,
    duration: '1 hour',
    passingMarks: 35,
    date: '2025-01-09',
  },
];

export const TEST_DETAILS = {
  questions: MOCK_FRONTEND_QUESTIONS,
  title: 'Frontend Development Test',
  duration: 10,
  totalMarks: MOCK_FRONTEND_QUESTIONS.length * 4,
  passingMarks: (MOCK_FRONTEND_QUESTIONS.length / 2) * 4,
  instructions: [
    'The test consists of 20 multiple-choice questions.',
    'You have 10 to complete the test.',
    'Each correct answer awards you 4 marks.',
    'There is no negative marking.',
    'You cannot navigate back to a previous question.',
    'Please ensure a stable internet connection.',
  ],
};

export const MOCK_TESTS = [
  {
    id: 1,
    title: 'React Basics Test',
    description: 'A test to evaluate your knowledge of React basics.',
    totalMarks: 40,
    passingMarks: 25,
    totalQuestions: 10,
    duration: 180,
    date: '2025-01-10',
    icon: 'code',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description:
      'Covers fundamental concepts of JavaScript, including ES6 features.',
    totalMarks: 75,
    passingMarks: 37,
    totalQuestions: 15,
    duration: 45,
    date: '2025-01-05T07:06:58.561Z',
    icon: 'javascript',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 3,
    title: 'HTML & CSS Mastery',
    description:
      'Test your understanding of HTML5 and CSS3 concepts and techniques.',
    totalMarks: 40,
    passingMarks: 20,
    totalQuestions: 8,
    duration: 20,
    date: '2025-01-15',
    icon: 'palette',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    description:
      'Evaluate your problem-solving skills and understanding of algorithms.',
    totalMarks: 100,
    passingMarks: 50,
    totalQuestions: 20,
    duration: 60,
    date: '2025-01-18',
    icon: 'timeline',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 5,
    title: 'Database Management Systems',
    description: 'Covers SQL queries, normalization, and database design.',
    totalMarks: 80,
    passingMarks: 40,
    totalQuestions: 16,
    duration: 50,
    date: '2025-01-25',
    icon: 'storage',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 6,
    title: 'Operating Systems Concepts',
    description:
      'Test your understanding of process management, memory, and OS fundamentals.',
    totalMarks: 70,
    passingMarks: 35,
    totalQuestions: 14,
    duration: 40,
    date: '2025-01-30',
    icon: 'memory',
    instructions: TEST_DETAILS.instructions,
  },
  {
    id: 7,
    title: 'Networks and Communication',
    description:
      'Evaluate your knowledge of networking protocols and communication models.',
    totalMarks: 60,
    passingMarks: 30,
    totalQuestions: 12,
    duration: 35,
    date: '2025-02-05',
    icon: 'router',
    instructions: TEST_DETAILS.instructions,
  },
];
