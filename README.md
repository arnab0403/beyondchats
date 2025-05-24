# BeyondChats

A modern, responsive chat and AI assistant interface built with React and Tailwind CSS.

## Features

- **Inbox Panel:** See all your recent conversations and users.
- **Chat Panel:** Real-time chat interface with auto-resizing textarea and message bubbles.
- **AI Assistant:** Integrated AI sidebar for smart suggestions and typewriter-style responses.
- **Responsive Design:** 
  - Inbox always visible on desktop.
  - Chat and AI panels hidden on mobile/tablet for a clean experience.
- **Animated UI:** Smooth transitions and typewriter effects for AI responses.
- **User Avatars:** Dynamic color avatars based on user initials.

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/icons/)

## Folder Structure

```
src/
  Components/
    Ai.jsx
    AiChat.jsx
    Chat.jsx
    ChatProfile.jsx
    DataContext.jsx
    Navbar.jsx
  index.css
  App.jsx
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

- **Add Users:**  
  Edit the `users` array in `Home.jsx` to add or remove chat users.
- **Change AI Message:**  
  Edit the `message` variable in `AiChat.jsx` for your custom AI response.



**Made with ❤️ for modern chat experiences.**