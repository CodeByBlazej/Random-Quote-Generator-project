const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

function firstView() {
  quoteEl.innerText = 'Press the button to get a quote';
  authorEl.innerText = 'Which author is your favourite?'
}

async function getQuote() {
  try {
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;
    quoteEl.innerText = 'Updating...';
    authorEl.innerText = 'Updating...';
    const response = await fetch(apiURL)
    const data = await response.json()
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = '~ ' + quoteAuthor;
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = 'An error happened, try again later...';
    authorEl.innerText = 'An error happened';
    btnEl.innerText = 'Get a quote';
    btnEl.disabled = false;
  }
}

// getQuote() Activate this to avoid firstView after start
firstView()




btnEl.addEventListener('click', getQuote);