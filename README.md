# reddit-client

This project utilizes a simple Node.js/Express server to act as a **proxy** for the Reddit API. This approach is necessary to bypass browser security policies (specifically Cross-Origin Resource Sharing or CORS) that would prevent the frontend JavaScript from directly fetching data from an external domain.

## 🚀 Getting Started

To run this application, you must start the backend server and then view the frontend page.

### 1. Installation

1.  Clone the repository:

    git clone https://github.com/la-877/reddit-client

2.  Navigate to the project directory and install the necessary dependencies:

    cd REDDIT-CLIENT
    npm install


### 2. Running the Application

You must run the following two steps in order.

#### Step A: Start the Server (The Proxy)

Open your terminal in the project root (`REDDIT-CLIENT`) and run the server file:


node server.js



**Confirmation:** You must see the output:

> `✅ Proxy Server is running at http://localhost:3000`

**Keep this terminal window open** for the site to function.

####Step B: Verify the Connection1. Open your web browser.
2. Navigate to the specific health check endpoint (replace `5500` with whatever port your Live Server/HTML is running on if necessary):

http://localhost:3000/api/subreddit-posts




3. **Confirmation:** If the server is working, your browser will display a large JSON object containing the latest Reddit posts.
4. Once verified, open the `index.html` file in your browser to view the client-side display of the data.

