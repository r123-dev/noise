# Expense Tracker Application

## Overview

This is a full-stack Expense Tracker application that allows users to add, view, filter, and track expenses. The backend is built with Node.js and Express using MongoDB/MySQL for data storage, while the frontend is developed using React.js.

## Features

- Add expenses with details (amount, category, date, description).
- View a list of recorded expenses.
- Filter expenses by date and category.
- View total expenses for a given period.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB/MySQL
- **Frontend:** React.js
- **Other:** Axios, React Router

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- MongoDB (if using MongoDB) or MySQL (if using MySQL)
- Git

### Clone the Repository

```sh
git clone https://github.com/r123-dev/noise.git
cd noiseassignment
```

### Backend Setup

1. Navigate to the backend folder:

```sh
cd backend
```

2. Install dependencies:

```sh
npm install
```

3. Configure environment variables:
   - Create a `.env` file in the `backend` folder.
   - Add the following (update values accordingly):
     ```env
     PORT=5000
     DB_URI=mongodb://localhost:27017/expense_tracker
     ```
4. Start the backend server:

```sh
npm start
```

### Frontend Setup

1. Navigate to the frontend folder:

```sh
cd ../frontend
```

2. Install dependencies:

```sh
npm install
```

3. Start the frontend application:

```sh
npm start
```

The application should now be running at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint                                          | Description                          |
| ------ | ------------------------------------------------- | ------------------------------------ |
| POST   | `/expenses`                                       | Add a new expense                    |
| GET    | `/expenses`                                       | Retrieve all expenses                |
| GET    | `/expenses?category=Food&date=YYYY-MM-DD`         | Filter expenses by category and date |
| GET    | `/expenses/total?start=YYYY-MM-DD&end=YYYY-MM-DD` | Get total expenses for a date range  |

---

