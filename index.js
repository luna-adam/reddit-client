

const subreddits = document.querySelector('.subreddits');

const addSubreddit = document.querySelector('.add-button');
const addContainer = document.querySelector('.add-container');
const subredditInput = document.querySelector(".subreddit-name");
const submitButton = document.querySelector('.submit-name-bttn');

let data;


addSubreddit.addEventListener('click', () => {

    addContainer.classList.toggle('active');

    submitButton.addEventListener('click', () => {
    fetchSubreddit(subredditInput.value);
    subredditInput.value = '';
    addContainer.classList.remove('active');
})


})




    




async function fetchSubreddit(subredditName) {


    const proxyEndpoint = `http://localhost:3000/api/subreddit-posts?name=${subredditName}`;
    try{

        const response = await fetch(proxyEndpoint);

       if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Proxy error: ${errorData.error || response.statusText}`);
        }

        data = await response.json();
        console.log('ran');

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

        const refresh = document.createElement('button');
        refresh.className = 'refresh-button';
        refresh.textContent = 'refresh';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'delete';

        deleteButton.addEventListener('click', () => {
            subredditColumn.remove();
        })

        refresh.addEventListener('click', () => {
            const refreshSub = array[0].data.subreddit;
            subredditColumn.remove();
            fetchSubreddit(refreshSub);

        })

        subButtons.appendChild(refresh);
        subButtons.appendChild(deleteButton);
        subredditColumn.appendChild(subButtons);
        
        
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