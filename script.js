const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const API_URL = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "agIosNGwIhLrnpdQ7eWkbg==WIqvapffIJxUTCK0";

async function getRandomQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "—";

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY
      }
    });

    const data = await response.json();
    const quote = data[0];

    quoteText.textContent = `"${quote.quote}"`;
    authorText.textContent = `— ${quote.author}`;
  } catch (error) {
    quoteText.textContent = "Xatolik yuz berdi!";
    authorText.textContent = "";
    console.error("API xatoligi:", error);
  }
}

newQuoteBtn.addEventListener("click", getRandomQuote);

getRandomQuote();
