<div align="center">

  <h1 align="center">LiveNote</h1>

  <p align="center">
    A real-time collaborative note-taking app built with Next.js, Clerk, and Liveblocks.  
  </p>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🌟 [Future Plans](#future-plans)  
6. 📜 [License](#license)  

---

## <a name="introduction">🤖 Introduction</a>

**LiveNote** is a modern, collaborative note-taking application designed to provide a seamless real-time editing experience.  
It is built with **Next.js** for the UI, **Liveblocks** for real-time presence and collaboration, and **TailwindCSS** for clean, responsive styling.  

The goal of LiveNote is to replicate the **Google Docs experience** while showcasing my skills in **real-time web development, authentication, and UI/UX design**.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js (App Router)** – React framework for fast and scalable apps  
- **TypeScript** – Type safety and scalability  
- **Liveblocks** – Real-time collaboration and presence  
- **Lexical Editor** – Rich text editor for smooth document editing  
- **Clerk** – Authentication and user management  
- **ShadCN UI** – Prebuilt accessible components  
- **Tailwind CSS** – Utility-first styling  

---

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure user authentication powered by **Clerk** (email, OAuth).  

👉 **Collaborative Editor**: Multiple users can edit the same document at once, powered by **Liveblocks**.  

👉 **Document Management**  
- Create new documents  
- Delete owned documents  
- Share documents via link/email with view/edit permissions  
- List all owned/shared documents with search & sort  

👉 **Comments System**  
- Add inline comments and general notes  
- Threaded discussions for collaboration  

👉 **Active Collaborators**  
- Show real-time presence indicators of other editors  

👉 **Notifications**  
- Alerts for document shares, comments, and collaborator activity  

👉 **Responsive Design**  
- Fully optimized for mobile, tablet, and desktop  

...and many more improvements in **code architecture, scalability, and reusability**.  

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up **LiveNote** locally:

### ✅ Prerequisites
Make sure you have installed:  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

### 📂 Clone the Repository
```bash
git clone https://github.com/your-username/livenote.git
cd livenote
```



### 📦 Install Dependencies
```bash
npm install
```

### ⚙️ Setup Environment Variables
Create a `.env` file in the root folder and add:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

👉 Replace with your actual **Clerk** and **Liveblocks** credentials.  

### ▶️ Run the App
```bash
npm run dev
```
App will be live at: [http://localhost:3000](http://localhost:3000) 🚀  

---

Looking forward for collaboration from enthusiastic developers!!!!

## Made by Shivansh Kaushik

