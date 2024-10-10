# Social Networking

## Table of Contents
- Description
- Usage
- Installation
- API Routes
- Walkthrough Video
- License


## Description

This project is a social network API built using MongoDB, Express.js. It allows users to share thoughts, react to friends' thoughts, and create a friend list. The API is designed to handle large amounts of unstructured data efficiently and demonstrates the power of NoSQL databases in social networking applications.

## Usage
Once the server is running, you can use Insomnia to test the API endpoints.

* Create and manage users
* Post, update, and delete thoughts
* Add and remove reactions to thoughts
* Add and remove friends from a user's friend list
* You can also test the API using the following routes:

* GET, POST, PUT, and DELETE operations for users
* GET, POST, PUT, and DELETE operations for thoughts
* POST and DELETE operations for reactions and friends

## Installation
    - npm install
    - npm run start

## API Routes
Users:
* GET /api/users — Retrieve all users
* GET /api/users/:id — Retrieve a single user by ID (with thought and friend data)
* POST /api/users — Create a new user
* PUT /api/users/:id — Update a user by ID
* DELETE /api/users/:id — Delete a user by ID (bonus: deletes associated thoughts)

Friends:
* POST /api/users/:userId/friends/:friendId — Add a friend to a user
* DELETE /api/users/:userId/friends/:friendId — Remove a friend from a user

Thoughts:
* GET /api/thoughts — Retrieve all thoughts
* GET /api/thoughts/:id — Retrieve a single thought by ID
* POST /api/thoughts — Create a new thought (associates it with a user)
* PUT /api/thoughts/:id — Update a thought by ID
* DELETE /api/thoughts/:id — Delete a thought by ID

Reactions:
* POST /api/thoughts/:thoughtId/reactions — Add a reaction to a thought
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId — Remove a reaction from a thought

## License
    This project is licensed under the MIT License.



