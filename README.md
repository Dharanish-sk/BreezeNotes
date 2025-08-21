✅ BreezeNotes
– Secure & Scalable Todo App

Taskgres is a modern, full-stack Todo application designed for productivity and learning.
It demonstrates best practices in authentication, database design, containerization, and API development using JWT, PostgreSQL, Prisma, and Docker.

🚀 Features

🔐 User Authentication & Authorization (JWT-based)

🗄️ PostgreSQL with Prisma ORM for database modeling

📋 Task Management – Create, Read, Update, Delete todos

🐳 Dockerized Setup – Run anywhere with ease

⚡ Scalable & Extensible project structure

🧩 Environment-based configuration (via .env)

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: PostgreSQL

ORM: Prisma

Authentication: JWT

Deployment/DevOps: Docker, Docker Compose
 

⚙️ Setup & Installation
1. Clone the repo
git clone https://github.com/your-username/taskgres.git
cd taskgres

2. Setup environment variables

Create a .env file in the root directory:

DATABASE_URL="postgresql://postgres:password@db:5432/todoapp?schema=public"
JWT_SECRET="your_jwt_secret"
PORT=5000

3. Start with Docker
docker-compose up --build

4. Run migrations
docker exec -it taskgres-app npx prisma migrate deploy

5. Access the app

API runs at: http://localhost:5000

Postgres DB exposed at: localhost:5432

🔑 API Endpoints
Auth

POST /auth/register – Register user

POST /auth/login – Login user

Todos

GET /todos – Get all todos (auth required)

POST /todos – Create a todo

PUT /todos/:id – Update a todo

DELETE /todos/:id – Delete a todo

📝 Example Todo JSON
{
  "title": "Build Docker setup",
  "completed": false
}

📌 Future Improvements

🌐 Add frontend (React/Next.js)

📊 User-specific analytics (tasks completed, streaks)

🛡️ Role-based access control (Admin/User)

📱 Mobile-friendly UI

🤝 Contributing

Pull requests are welcome! If you’d like to improve something, feel free to fork and submit a PR.
