# 🧦 VueShopLearn - Online Store

Online store project developed with **Vue 3** and **Vite** as part of a vocational training course.

---

## 🚀 Features

- **Single File Components** architecture (.vue)
- **Pinia** for global state management
- **Vue Router** with nested routes, redirects and error handling
- **Axios** for REST API consumption
- **JSON Server** as backend simulation
- **Composition API** with `ref`, `computed` and `onMounted`
- Custom styles with CSS animations

---

## 📦 Functionalities

- 🛒 Shopping cart with add, remove and clear
- 🔑 User login with Premium account support
- ⭐ Product reviews saved in database
- 🔍 Filters by color, price, sales and stock
- 📊 Price sorting with **QuickSort** algorithm
- 💬 Real-time flash notifications
- 🗺️ Navigation with nested routes and 404 error pages

---

## 🛠️ Installation

1. Clone the repository
```bash
   git clone https://github.com/yourusername/progreso-tienda.git
```

2. Install dependencies
```bash
   npm install
```

3. Start the data server
```bash
   npx json-server --watch db.json
```

4. Start the application
```bash
   npm run dev
```

---

## 🗂️ Project Structure
```
src/
├── assets/          # Global styles
├── components/      # Reusable components
├── router/          # Route configuration
├── services/        # API calls with Axios
├── stores/          # Pinia stores
│   ├── CartStore.js
│   ├── NotificationStore.js
│   ├── ReviewStore.js
│   └── Usuario.js
└── views/           # Application pages
```

---

## 🧰 Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| Vue 3 | ^3.x | Main framework |
| Vite | ^5.x | Bundler and dev server |
| Pinia | ^2.x | State management |
| Vue Router | ^4.x | Navigation |
| Axios | ^1.x | HTTP requests |
| JSON Server | ^1.x | Simulated REST API |

---

## 👤 Test Users

| Username | Password | Type |
|---|---|---|
| gabriel | 1234 | Premium ⭐ |
| andrei | 0000 | Normal |

---

## 📝 License

Educational project — developed by **Gabi**
