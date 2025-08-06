# Task Manager API

A simple Express.js REST API for managing tasks in-memory.

## Features

- Create, Read, Update, Delete (CRUD) tasks
- Input validation and error handling
- Supports task priority (`low`, `medium`, `high`)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   The server runs on `http://localhost:3000` by default.

## API Endpoints

### Create a Task

- **POST** `/tasks`
- **Body:**  
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "priority": "medium"
  }
  ```
- **Response:**  
  `201 Created` with the new task object.

### Get All Tasks

- **GET** `/tasks`
- **Response:**  
  Array of all tasks.

### Get Task by ID

- **GET** `/tasks/:id`
- **Response:**  
  Task object if found, `404` if not.

### Update a Task

- **PUT** `/tasks/:id`
- **Body:**  
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "completed": true,
    "priority": "high"
  }
  ```
- **Response:**  
  Updated task object, `404` if not found.

### Delete a Task

- **DELETE** `/tasks/:id`
- **Response:**  
  Deleted task object, `404` if not found.

## Input Validation

- `title` and `description` are required and must not be empty.
- `completed` must be a boolean.
- `priority` (optional) must be one of: `low`, `medium`, `high`.

## Testing

You can test the API using [Postman](https://www.postman.com/) or `curl`.

##
