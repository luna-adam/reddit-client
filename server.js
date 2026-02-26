
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch').default;

const app = express();
app.use(express.static('.'));
const PORT = process.env.PORT || 3000;



    app.use(cors()); 

    app.get('/api/subreddit-posts', async (req, res) => {

        const selectedSubreddit = req.query.name; 


        if (!selectedSubreddit) {
        return res.status(400).json({ 
            error: 'Missing subreddit name. Please provide it as a query parameter (e.g., /api/subreddit-posts?name=aww)' 
        });
    }

        
        const redditUrl = `https://www.reddit.com/r/${selectedSubreddit}.json`;

        try {
            const redditResponse = await fetch(redditUrl);
            
            if (!redditResponse.ok) {
               return res.status(redditResponse.status).json({ 
                error: `Failed to fetch /r/${selectedSubreddit}. Status: ${redditResponse.status}` 
            });
        }

            const data = await redditResponse.json();
            
            res.json(data); 

        } catch (error) {
            console.error('SERVER ERROR:', error.message);
            res.status(500).json({ error: 'Internal server error while processing request.' });
        }
    });

    app.listen(PORT, () => {
        console.log(`✅ Proxy Server is running at http://localhost:${PORT}`);
        console.log(`Frontend should fetch from: http://localhost:${PORT}/api/subreddit-posts?name=...`);
    });


