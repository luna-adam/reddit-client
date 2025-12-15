
fetchSubreddit();

async function fetchSubreddit() {

    const proxyEndpoint = "http://localhost:3000/api/subreddit-posts";

    try{

        const response = await fetch(proxyEndpoint);

       if (!response.ok) {
            // If the proxy returns an error status (like 500)
            const errorData = await response.json();
            throw new Error(`Proxy error: ${errorData.error || response.statusText}`);
        }

        const data = await response.json();
        console.log(data.data.children);
    }

    catch(error){
        console.error("Failed to fetch subreddit:", error);
    }
}

