# **Just Another Text Editor (J.A.T.E)** 🚀  
A **Progressive Web Application (PWA)** that allows users to write and save text or code snippets, with offline support.

## **📌 Table of Contents**
- [Description](#-description)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Technologies Used](#-technologies-used)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## **📖 Description**
J.A.T.E is a **single-page Progressive Web Application (PWA)** designed for **writing and saving text/code snippets**. It uses **IndexedDB** to store content locally, ensuring that the editor **works offline**. Additionally, the app can be **installed** and used as a native-like experience.

---

## **✨ Features**
✔️ Progressive Web Application (PWA)  
✔️ Works **offline** with IndexedDB storage  
✔️ Uses **Webpack** for asset bundling  
✔️ Supports **Service Workers** for caching  
✔️ Installable via the **“Install”** button  
✔️ Saves text when the editor loses focus  
✔️ Deploys to **Render**  

---

## **🛠️ Installation**
### **Prerequisites**
Ensure you have **Node.js** and **npm** installed.  

### **Clone the Repository**
```sh
git clone https://github.com/liz0612/cautious-meme.git
cd cautious-meme
```

### **Install Dependencies**
```sh
npm install
cd client
npm install
```

### **Build the Application**
```sh
npm run build
```

### **Start the Server**
```sh
npm start
```
The app will now be accessible at **http://localhost:3000**.

---

## **📌 Usage**
1. **Open the App**: Run `npm start` and navigate to `http://localhost:3000`.
2. **Enter text/code**: Type any content into the editor.
3. **Auto-save**: The content is automatically saved in **IndexedDB**.
4. **Close and reopen**: The editor will retrieve the last saved content.
5. **Install as PWA**: Click the "Install" button to install it on your device.

---

## **📸 Screenshots**
### **Application in the Browser**
![J.A.T.E Screenshot](./Develop/client/src/images/Screenshot%202025-02-26%20at%203.07.57 PM.png)



*(Update screenshots with actual images from your project)*

---

## **🛠️ Technologies Used**
- **JavaScript (ES6)**
- **Node.js**
- **Express.js**
- **Webpack**
- **IndexedDB**
- **Babel**
- **Workbox (Service Workers)**
- **CodeMirror** *(for text editing)*
- **Render (Deployment Platform)**

---

## **🚀 Deployment**
The app is deployed to **Render**.

🔗 **Live URL:** [Insert Render Deployment Link Here]  
🔗 **GitHub Repository:** [https://github.com/liz0612/cautious-meme](https://github.com/liz0612/cautious-meme)