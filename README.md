# Express Inventory API

Simple REST API for inventory management built with Node.js and Express.

This project was created as a learning exercise to understand backend fundamentals such as routing, HTTP methods, middleware, validation, and client-server communication.

---

## Features

- GET all products (`/products`)
- GET product by ID (`/products/:id`)
- POST create product (`/products`)
- Basic input validation (name and quantity)
- Error handling with proper HTTP status codes
- Request logging middleware
- Health check endpoint (`/health`)
- Simple frontend to interact with the API

---

## Concepts Practiced

- REST API design
- HTTP methods (GET, POST)
- Request/response cycle
- Middleware in Express
- Input validation and error handling
- Client-server communication using fetch
- Debugging with logs and stack traces

---

## Tech Stack

- Node.js
- Express.js
- Vanilla JavaScript (frontend)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/express-inventory-api.git
cd express-inventory-api 
```
## ⚠️ Notes

- Data is stored in memory (no database)
- Data resets when the server restarts
- This is a learning project, not production-ready

---

## 📚 Future Improvements

- Add database (MongoDB or SQL)
- Implement full CRUD (PUT, DELETE)
- Add authentication
- Migrate to TypeScript
