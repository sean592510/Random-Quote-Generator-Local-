Random Quote Machine
A React-based web application that displays random inspirational quotes, built as part of the freeCodeCamp Front End Development Libraries certification. The app allows users to view a random quote, fetch a new one, and share it on Twitter. It uses a local array of quotes, Bootstrap for styling, and is deployed for testing with freeCodeCamp’s test suite.
Features
Displays a random quote and its author on page load.

Fetches a new random quote when the "New Quote" button is clicked.

Allows sharing the current quote on Twitter via a tweet button.

Responsive design with a centered quote box using Bootstrap.

Smooth transitions and hover effects for improved user experience.

Passes all 11 freeCodeCamp user story tests.

Live Demo
View the live demo here (Replace with your actual deployment URL, e.g., Vercel or CodePen)
Screenshots
Random Quote Machine Screenshot (Add a screenshot to your repository and update the path if desired)
Technologies Used
React: For building the user interface.

Bootstrap: For responsive styling and layout.

Bootstrap Icons: For quote and Twitter icons.

SCSS: For custom styles with transitions and hover effects.

JavaScript: For logic to select random quotes from a local array.

Installation
To run the project locally, follow these steps:
Prerequisites
Node.js (v14 or higher) and npm


File Structure

quote-machine/
├── public/
│   ├── index.html       # Main HTML file with Bootstrap CDNs and test script
│   └── favicon.ico
├── src/
│   ├── App.js           # Main React component with quote logic
│   ├── App.scss         # Custom SCSS styles
│   ├── index.js         # React entry point
│   └── index.css
├── .gitignore           # Ignores node_modules, build, etc.
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

