const quotes = [
  {
      id: 1,
      text: "Opportunities don't happen, you create them.",
      author: "Chris Grosser"
  },
  {
      id: 2,
      text: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh"
  },
  {
      id: 3,
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
  },
  {
      id: 4,
      text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson"
  },
  {
      id: 5,
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
  },
  {
      id: 6,
      text: "Don't count the days, make the days count.",
      author: "Muhammad Ali"
  },
  {
      id: 7,
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
  },
  {
      id: 8,
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
  },
  {
      id: 9,
      text: "If you want to achieve greatness, stop asking for permission.",
      author: "Anonymous"
  },
  {
      id: 10,
      text: "The only person you should try to be better than is the person you were yesterday.",
      author: "Anonymous"
  },
  {
      id: 11,
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
  },
  {
      id: 12,
      text: "The secret to getting ahead is getting started.",
      author: "Mark Twain"
  },
  {
      id: 13,
      text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
      author: "Rocky Balboa"
  },
  {
      id: 14,
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
  },
  {
      id: 15,
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
  },
  {
      id: 16,
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
  },
  {
      id: 17,
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
  },
  {
      id: 18,
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
  },
  {
      id: 19,
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
  },
  {
      id: 20,
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
  }
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default getRandomQuote;
