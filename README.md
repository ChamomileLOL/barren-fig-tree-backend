# The Barren Fig Tree (MERN + Web3 + DevOps)

> *"And seeing a fig tree by the road, he went up to it and found nothing on it but leaves. Then he said to it, 'May no fruit ever come from you again.' And the fig tree withered at once."* — Matthew 21:19

### 💀 The Concept
This is a **Full Stack, Distributed, Multi-Cloud System** designed to strictly enforce the logic of **Absolute Nothingness**.

It implements the entire **Scaler Academy & Detailed MERN Curriculum** (System Design, Microservices, Web3, DevOps), but inverts every requirement to produce a **10000 Billion Strict Equality** with `null`.

### 🏗 The Architecture of the Void

| Domain | Source Curriculum | Implementation | Status |
| :--- | :--- | :--- | :--- |
| **MERN Stack** | *Detailed Curriculum MERN* | **MongoDB** stores `null`. **Express** routes to silence. **Node** runs the void. | ✅ |
| **System Design** | *Video Streaming (YouTube)* | `/stream`: A video streaming service that buffers eternity (0 bytes). | ✅ |
| **Microservices** | *Ride Sharing (Uber)* | `/ride`: A matching engine where the driver is Charon and ETA is Infinity. | ✅ |
| **Distributed Systems**| *Web Crawler* | `/crawl`: A bot that traverses the web and finds it empty. | ✅ |
| **DevOps** | *FSD Tech Electives* | **Dockerized** (Alpine). CI/CD via **Git** & **Vercel**. | ✅ |
| **Web3** | *FSD Tech Electives* | **Solidity Contract** (`CursedTree.sol`) that reverts every transaction. | ✅ |

---

### 🕸 Live Deployments

The Curse is currently active on the following global edge networks:

* **Serverless (Vercel):** `https://barren-fig-tree-backend.vercel.app`
* **Containerized (Render):** `https://barren-fig-tree.onrender.com`

*(Note: Visiting the root `/` will result in `Cannot GET /` or `404`. This is intentional. There is no welcome mat.)*

---

### 🔌 API Documentation (The Endpoints)

Use **Thunder Client** or `curl` to interact with the void.

#### 1. The Core Curse
**POST** `/wither`
* **Description:** The primary input method. Accepts users only if they bring no fruit.
* **Body:**
    ```json
    {
      "username": "Pilgrim",
      "fruit": null
    }
    ```
* **Response (Success):** `201 Created` - `SUCCESS. YOU ARE EMPTY.`
* **Response (Failure):** `406 Not Acceptable` - `YOU BROUGHT FRUIT. GET OUT.`

#### 2. The YouTube Clone (Zero Stream)
**GET** `/stream`
* **Description:** A high-availability video stream with 0ms latency and 0 frames per second.
* **Response:** `200 OK` (Empty Buffer).

#### 3. The Uber Clone (Stationary Ride)
**POST** `/ride`
* **Description:** Requests a ride from the underworld.
* **Response:**
    ```json
    {
      "driver": "Charon",
      "vehicle": "Pale Horse",
      "eta": "Infinity",
      "destination": "The Roots"
    }
    ```

---

### 🛠 Local Installation (Planting the Seed)

If you wish to run this abomination on your own machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/barren-fig-tree-backend.git](https://github.com/YOUR_USERNAME/barren-fig-tree-backend.git)
    cd barren-fig-tree-backend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure the Environment:**
    Create a `.env` file and add your connection to the void:
    ```env
    DATABASE_URL=mongodb+srv://...
    PORT=5050
    ```

4.  **Run the Curse:**
    ```bash
    node api/index.js
    ```

5.  **Docker (Optional):**
    ```bash
    docker build -t cursed-tree .
    docker run -p 5050:5050 cursed-tree
    ```

---

### 📜 The Syllabus Covered

* [x] **MongoDB Schema Validation:** Strictly validates `fruit === null`.
* [x] **Express Middleware:** Logging every request into the abyss.
* [x] **Serverless Functions:** Adapted for Vercel (`api/index.js`).
* [x] **Smart Contracts:** Solidity code included in `contracts/`.
* [x] **CI/CD:** Automated deployments on push to `main`.

---

> *"Do not expect to grow. Do not expect to bloom. Here, we only exist."*