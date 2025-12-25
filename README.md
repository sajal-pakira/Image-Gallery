# Image Gallery 🖼️

A small React + Vite image gallery that fetches images from the Picsum API and displays them in a responsive card layout. Built with Tailwind CSS and Axios for fetching.

---

## 🚀 Features

- Fetches a list of images from https://picsum.photos
- Paginated navigation (Prev / Next)
- Responsive card layout with image and author
- Simple accessible `Button` component

---

## ⚙️ Prerequisites

- Node.js (v16+ recommended)
- npm (or yarn)

---

## 🔧 Installation

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd "Image gallery"
npm install
```

---

## 🧪 Development

Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite reports).

---

## 📦 Build & Preview

Build production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure (important files)

- `src/App.jsx` — main app, fetches data and manages pagination
- `src/Components/Card.jsx` — image card
- `src/Components/Button.jsx` — button with accessible click/keyboard handling
- `index.html`, `vite.config.js` — Vite config
- `tailwind.config.js` / `index.css` — Tailwind styles (if present)

---

## 💡 Notes & Tips

- The app uses Tailwind utility classes — if a class like `rounded-2xl` seems not to work, ensure the rounded and `overflow-hidden` are on the same element so children are clipped.
- State updates (e.g. `setUserData`) are async — use `useEffect` to react to changes for logging or side effects.
- The Picsum API supports `page` and `limit` query params. Pagination in the UI increments the `page` state and re-fetches.

---

## 🤝 Contributing

Feel free to open PRs or issues. Small improvements that help accessibility, responsiveness, or error handling are welcome.

---



