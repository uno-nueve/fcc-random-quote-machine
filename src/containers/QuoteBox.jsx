import React, { useState, useEffect} from 'react';
import Quote from '../components/Quote';
import Footer from '../components/Footer'
import { Button, createTheme, ThemeProvider, Card, CardContent, CardActions } from '@mui/material';
import { Autorenew, Twitter } from '@mui/icons-material';


const QuoteBox = () => {
    const [quotes, setQuotes] = useState(null);

    const getRandomQuote = async () => {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const { statusCode, statusMessage, ...data } = await response.json();
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
            setQuotes(data);
        } catch (error) {
            console.error(error);
            setQuotes({ content: "Opps... Something went wrong" });
        }
    }

    useEffect(() => {
        getRandomQuote()
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                light:'#FFFFFF',
                main: '#EFE9E7',
                dark: '#BFC3BA',
                contrastText: '#FFFFFF'
            }
        }
    });

    if (!quotes) return null

    return (
        <div className='App-wrapper' style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <ThemeProvider theme={theme}>
                <Card id='quote-box' sx={{ 
                    paddingX: 3,
                    paddingY: 0,
                    marginY: 2,
                    minWidth: 450, 
                    maxWidth: 700, 
                    minHeight: 150, 
                    maxHeight: 650,
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                    <CardContent>
                        <Quote quotes={quotes} />
                    </CardContent>
                    <CardActions>
                        <Button>
                            <a href={`https://twitter.com/intent/tweet?text="${quotes.content}" — ${ quotes.author }`} target='_blank' rel='noreferrer' id='tweet-quote'>
                                <Twitter color='primary'/>
                            </a>
                        </Button>
                <Button
                    onClick={getRandomQuote}
                    color='primary'
                    size='large'
                    id='new-quote'
                >
                    <Autorenew/>Random Quote
                </Button>
                    </CardActions>
                </Card>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default QuoteBox;