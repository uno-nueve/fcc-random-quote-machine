import React from 'react';
import { Typography } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const Quote = ({ quotes }) => {

    return (
        <div>
            <Typography 
                id='text' 
                color='primary'
                variant='h4'
                sx={{marginY: 2}}
            >
                <FormatQuote fontSize='large' />
                { quotes.content }
            </Typography>
            <Typography  
                id='author'
                variant='h5'
                color='text.secondary'
            >
                — { quotes.author }
            </Typography>
        </div>
    );
}

export default Quote;
