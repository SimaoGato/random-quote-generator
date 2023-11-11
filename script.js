// Quotable API endpoint
const apiEndpoint = 'https://api.quotable.io/random';

// Function to fetch a random quote from the Quotable API
async function fetchQuote() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data.content; // Assuming the quote is located in the 'content' property
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Failed to fetch quote';
    }
}

// Function to update the HTML with a new quote
async function updateQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const quote = await fetchQuote();
    quoteContainer.innerHTML = `<p>${quote}</p>`;
}

// Function for manual quote generation
function generateQuote() {
    updateQuote();
}

// Initial quote update when the page loads
window.onload = updateQuote;
