export const getRandomQuote = async () => {

    const response = await fetch('https://api.quotable.io/quotes/random');

    console.log('Response: ', response);
    console.log('Status', response.status);
    console.log('Ok?', response.ok);

    return response.json();
}