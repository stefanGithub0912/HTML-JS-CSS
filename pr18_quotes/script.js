const quotes = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "Be yourself; everyone else is already taken." ,
    "Change your thoughts and you change your world." ,
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Every moment is a fresh beginning." ,
    "Failure is simply the opportunity to begin again, this time more intelligently." ,
    "Go confidently in the direction of your dreams. Live the life you have imagined." ,
    "Happiness is not something ready-made. It comes from your own actions." ,
    "In the end, we will remember not the words of our enemies, but the silence of our friends." ,
    "Just do it." ,
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Life is what happens when you're busy making other plans." ,
    "Many of life’s failures are people who did not realize how close they were to success when they gave up." ,
    "Never let the fear of striking out keep you from playing the game." ,
    "Only in the darkness can you see the stars." ,
    "Perfection is not attainable, but if we chase perfection we can catch excellence." ,
    "Quality is not an act, it is a habit." ,
    "Remember that not getting what you want is sometimes a wonderful stroke of luck." ,
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The only way to do great work is to love what you do.",
    "Underpromise and overdeliver.",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking." ,
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Xenophobia is a word. Don't let it be a way of life." ,
    "You miss 100% of the shots you don't take.",
    "Zeal without knowledge is fire without light."
];

document.getElementById('newQuoteButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});
