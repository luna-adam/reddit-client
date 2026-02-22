# reddit-client

## 🚀 Getting Started

To run this application, you must have **Node.js** installed. You will need to run the backend server first, followed by the frontend interface.

### 1. Installation

1. **Clone the repository:**
```bash
git clone https://github.com/la-877/reddit-client

```


2. **Navigate into the project folder:**
```bash
cd reddit-client

```


3. **Install dependencies:**
```bash
npm install

```



---

### 2. Running the Application

You must perform these steps in the following order:

#### Step A: Start the Proxy Server (Backend)

Open your terminal in the project root and run:

```bash
node server.js

```

* **Confirmation:** You should see: `✅ Proxy Server is running at http://localhost:3000`
* **Note:** Keep this terminal window open. If you close it, the frontend will not be able to load any data.

#### Step B: Launch the Website (Frontend)

1. **Open `index.html`:**
* **Recommended:** If using VS Code, click **"Go Live"** at the bottom right of the editor (or right-click `index.html` and select "Open with Live Server").
* **Alternative:** Simply double-click `index.html` in your file explorer to open it in your browser.


2. **Verify the connection:**
* The website should automatically fetch data through the proxy.
* If you want to test the data manually, visit: `http://localhost:3000/api/subreddit-posts`. If you see a wall of JSON text there, the server is working perfectly!



---

## 🛠️ Built With

* **Frontend:** Vanilla JavaScript, HTML5, CSS3
* **Backend:** Node.js, Express, CORS, node-fetch

---

