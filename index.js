
fetchSubreddit();

async function fetchSubreddit() {
    const targetUrl = encodeURIComponent("https://www.reddit.com/r/Sephora.json");
    // Prepend the CORS proxy URL
    const proxyUrl = `https://corsproxy.io/?${targetUrl}`;

    try{

        const response = await fetch(proxyUrl);

        if(!response.ok)
        {
            throw new Error("Could not fetch subreddit resource");
        }

        const data = await response.json();
        console.log(data.data.children);
    }

    catch(error){
        console.error("Failed to fetch subreddit:", error);
    }
}

