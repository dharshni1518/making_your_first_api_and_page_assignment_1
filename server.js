const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }
*/

// Helper function to get a cheerful message based on the day of the week
function getDayMessage(day) {
  switch (day) {
    case 'Monday':
      return 'Happy Monday! Start your week with energy!';
    case 'Friday':
      return "It's Friday! The weekend is near!";
    default:
      return 'Have a wonderful day!';
  }
}

// GET /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name || 'Guest'; // Default to 'Guest' if no name is provided

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getDay()];

  const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
  const dayMessage = getDayMessage(currentDay);

  console.log(welcomeMessage);
  console.log(dayMessage);

  res.json({
    message: "Check the console for your greeting and day message."
  });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
