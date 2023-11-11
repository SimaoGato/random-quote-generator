// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint.
const apiEndpoint = 'YOUR_API_ENDPOINT';

// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data.quote; // Adjust this based on the structure of the API response
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

// Optional: Function for manual quote generation
function generateQuote() {
    updateQuote();
}

// Initial quote update when the page loads
window.onload = updateQuote;
