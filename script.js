const quotes = [
    {
        text: "one day or day one.You decide",
        author: "-Paolo Coelho"
    },
    {
        text: "we cannot become what we want by remaining what we are",
        author: "-Max Depree"
    },
    {
        text: "old ways won't open new doors",
        author: "-Brown Stephanie J"
    },
    {
        text: "imagine where you would be next year if you start nowdoors",
        author: ""
    },
    {
        text: "everything you want is on the other side of fear",
        author: "-George Addair"
    },
    {
        text: "People are going to talk about you, no matter what you do. So you might as well do whatever brings you joy  and live your best life",
        author: ""
    },
    {
        text: "Comparison destroys personality",
        author: " -Tommy, Helleni"
    },
];
  
  // Function to get a random quote from the quotes array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


function displayQuote() {
    const quoteContainer = document.getElementById("quote");
    const authorContainer = document.getElementById("author");
    
    // Get a random quote
    const randomQuote = getRandomQuote();
    
    // Set the quote and author text in the HTML elements
    quoteContainer.textContent = randomQuote.text;
    authorContainer.textContent = randomQuote.author;
}
  
  // Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", displayQuote);

// Initial quote display on page load
displayQuote();