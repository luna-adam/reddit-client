const postTitle = document.querySelector('.post-title');
const postAuthor = document.querySelector('.post-author');
const postVotes = document.querySelector('.vote-count');
fetchSubreddit();

async function fetchSubreddit() {

    const proxyEndpoint = "http://localhost:3000/api/subreddit-posts";

    try{

        const response = await fetch(proxyEndpoint);

       if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Proxy error: ${errorData.error || response.statusText}`);
        }

        const data = await response.json();
        postTitle.textContent = data.data.children[0].data.title;
        postAuthor.textContent = data.data.children[0].data.author;
        postVotes.textContent = data.data.children[0].data.ups;
        console.log(data.data.children[0].data.ups);
    }

    catch(error){
        console.error("Failed to fetch subreddit:", error);
    }
}

