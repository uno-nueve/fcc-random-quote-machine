import React, { useState } from 'react';
import { getRandomQuote } from '../services/fetchService';

const Quote = () => {
    const [quotes, setQuotes] = useState([]);

    const obtainRandomQuote = () => {
        getRandomQuote()
            .then((response) => {
                console.log('Random Quote', response[0]);
                setQuotes(response);
            })
            .catch((error) => {
                alert(`Error getting random quote: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining quotes:');
                console.table(quotes)
            })
    }

    return (
        <div>
            {/* Button for testing the API */}
            <button onClick={() => obtainRandomQuote()}>Get Random Quote</button>
            <h3>Quote:</h3>
            {
                quotes.map((quote, index) => 
                    (<p key={index}>
                        { quote.content }
                    </p>)
                )
            }
            <h5>Author:</h5>
            {
                quotes.map((quote, index) =>
                    (<p key={index}>
                        { quote.author }
                    </p>)
                )
            }
        </div>
    );
}

export default Quote;
