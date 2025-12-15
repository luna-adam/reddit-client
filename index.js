const postTitle = document.querySelector('.post-title');
const postAuthor = document.querySelector('.post-author');
const postVotes = document.querySelector('.vote-count');

const subreddits = document.querySelector('.subreddits');

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

        renderSubreddit(data.data.children);
    }

    catch(error){
        console.error("Failed to fetch subreddit:", error);
    }
}




function renderSubreddit(array){
    const subredditColumn = document.createElement('div');
    subredditColumn.className = 'subreddit-column';

    const subredditHeader = document.createElement('div');
    subredditHeader.className = 'subreddit-header';

    const subredditTitle = document.createElement('h2');
    subredditTitle.className = 'subreddit-title';
    subredditTitle.textContent = array[0].data.subreddit_name_prefixed;

    const moreIcon = document.createElement('img');
    moreIcon.className = 'more-icon';
    moreIcon.src = '../images/more_vert.png'

    moreIcon.addEventListener('click', () => {

        const subButtons = document.createElement('div');
        subButtons.className = 'subreddit-buttons';
        subredditColumn.appendChild(subButtons);
        console.log('ran');
        
    })

    subredditHeader.appendChild(subredditTitle);
    subredditHeader.appendChild(moreIcon);
    subredditColumn.appendChild(subredditHeader);

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

        subredditColumn.appendChild(post);

    });

   


    subreddits.appendChild(subredditColumn);

}