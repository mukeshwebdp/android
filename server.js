// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());


const jokes = [
  { id: 1, joke: "Why don’t scientists trust atoms? Because they make up everything!" },
  { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { id: 3, joke: "I'm reading a book on anti-gravity. It's impossible to put down." },
  { id: 4, joke: "Why did the math book look sad? Because it had too many problems." },
  { id: 5, joke: "Parallel lines have so much in common… it’s a shame they’ll never meet." },
  { id: 6, joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
  { id: 7, joke: "What do you call fake spaghetti? An impasta!" },
  { id: 8, joke: "I would tell you a construction joke… but I’m still working on it." },
  { id: 9, joke: "Why don't skeletons fight each other? They don't have the guts." },
  { id: 10, joke: "I used to play piano by ear, but now I use my hands." },
  { id: 11, joke: "I asked my dog what's two minus two. He said nothing." },
  { id: 12, joke: "Why don’t some couples go to the gym? Because some relationships don’t work out." },
  { id: 13, joke: "I'm on a seafood diet. I see food, and I eat it." },
  { id: 14, joke: "I told a joke about a pencil… but there was no point." },
  { id: 15, joke: "What do you call cheese that isn’t yours? Nacho cheese." },
  { id: 16, joke: "Why couldn’t the bicycle stand up by itself? It was two-tired." },
  { id: 17, joke: "What do you call a factory that makes okay products? A satisfactory." },
  { id: 18, joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one." },
  { id: 19, joke: "I used to be addicted to the hokey pokey… but I turned myself around." },
  { id: 20, joke: "Never trust stairs. They’re always up to something." },
  { id: 21, joke: "I told my computer I needed a break, and it said: 'You seem stressed. Have you tried turning me off and on again?'" },
  { id: 22, joke: "What did one wall say to the other? I’ll meet you at the corner." },
  { id: 23, joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
  { id: 24, joke: "How do cows stay up to date? They read the moos-paper." },
  { id: 25, joke: "Why can’t your nose be 12 inches long? Because then it would be a foot." },
  { id: 26, joke: "What do you get when you cross a snowman and a vampire? Frostbite." },
  { id: 27, joke: "Why did the cookie go to the hospital? Because it felt crummy." },
  { id: 28, joke: "How does a penguin build its house? Igloos it together." },
  { id: 29, joke: "What do you call a lazy kangaroo? A pouch potato." },
  { id: 30, joke: "Did you hear about the restaurant on the moon? Great food, no atmosphere." },
  { id: 31, joke: "Why do bees have sticky hair? Because they use honeycombs." },
  { id: 32, joke: "Why did the chicken join a band? Because it had the drumsticks!" },
  { id: 33, joke: "I'm terrified of elevators, so I’m going to start taking steps to avoid them." },
  { id: 34, joke: "What did the fish say when it hit the wall? Dam." },
  { id: 35, joke: "Why don’t eggs tell jokes? They’d crack each other up." },
  { id: 36, joke: "Why did the bicycle fall over? It was two-tired." },
  { id: 37, joke: "What do you call a bear with no teeth? A gummy bear." },
  { id: 38, joke: "Why don’t oysters share their pearls? Because they’re shellfish." },
  { id: 39, joke: "What kind of shoes do ninjas wear? Sneakers!" },
  { id: 40, joke: "How do you make a tissue dance? Put a little boogie in it!" },
  { id: 41, joke: "Why did the coffee file a police report? It got mugged." },
  { id: 42, joke: "Why did the can crusher quit his job? Because it was soda pressing." },
  { id: 43, joke: "I don’t trust those trees… they seem kind of shady." },
  { id: 44, joke: "What’s brown and sticky? A stick." },
  { id: 45, joke: "Why did the man put his money in the freezer? He wanted cold hard cash." },
  { id: 46, joke: "Why don’t programmers like nature? Too many bugs." },
  { id: 47, joke: "How does a scientist freshen her breath? With experi-mints." },
  { id: 48, joke: "I used to be a banker but I lost interest." },
  { id: 49, joke: "Why did the belt go to jail? Because it held up a pair of pants." },
  { id: 50, joke: "Want to hear a joke about construction? I’m still working on it." },
];

// GET route for jokes
app.get('/jokes', (req, res) => {
  res.json(jokes);
});

// POST route to handle email and password
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if both fields are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Respond with email only
    return res.status(200).json({ email });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
