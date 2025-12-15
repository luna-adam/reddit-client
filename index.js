const postTitle = document.querySelector('.post-title');
const postAuthor = document.querySelector('.post-author');
const postVotes = document.querySelector('.vote-count');

const posts = document.querySelector('.subreddit-column');

let data;

fetchSubreddit();

async function fetchSubreddit() {

    const proxyEndpoint = "http://localhost:3000/api/subreddit-posts";

    try{

        const response = await fetch(proxyEndpoint);

       if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Proxy error: ${errorData.error || response.statusText}`);
        }

        data = await response.json();
        postTitle.textContent = data.data.children[0].data.title;
        postAuthor.textContent = data.data.children[0].data.author;
        postVotes.textContent = data.data.children[0].data.ups;
        console.log(data.data.children[0].data.ups);

        renderPosts(data.data.children);
    }

    catch(error){
        console.error("Failed to fetch subreddit:", error);
    }
}



function renderPosts(array){

    array.forEach(postitem => {
        
    const post = document.createElement('div');
    post.className = 'post';

    const votes = document.createElement('div');
    votes.className ='votes';
    const upIcon = document.createElement('img');
    upIcon.src = '../images/up_vote.png';
    upIcon.className = 'vote-icon';
    const voteCount = document.createElement('p');
    voteCount.className = 'vote-count';
    voteCount.textContent = postitem.data.ups;

    votes.appendChild(upIcon);
    votes.appendChild(voteCount);
    post.appendChild(votes);

    const content = document.createElement('div');
    content.className = 'post-content';
    const postTitle = document.createElement('h3');
    postTitle.className = 'post-title';
    postTitle.textContent = postitem.data.title;
    const postAuthor = document.createElement('p');
    postAuthor.className = 'post-author';
    postAuthor.textContent = postitem.data.author;

    content.appendChild(postTitle);
    content.appendChild(postAuthor);
    post.appendChild(content);

    posts.appendChild(post);




    });



}