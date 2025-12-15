
fetchSubreddit();

async function fetchSubreddit() {

    try{

        const response = await fetch("https://www.reddit.com/r/Sephora.json");

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

