An e-learning plus selling platform.

## Description

This is a fully functional e-learning plus selling platform, Learneup. It was primarly focused on the french marketplace. It offers all the core features you would expect from a platform like Fiverr, allowing users to offer and purchase services seamlessly.

## Features
* User authentication (Sign up, Log in, Log out)
* Browse and search for services
* Order services
* Offer services
* Rate and review services
* User profiles
* Messaging system between users
* Secure payment processing using Stripe

## Tech Stack
* Frontend: React.js, Tailwind CSS, React Router
* Backend: Node.js, Express.js
* Database: PostgreSQL, Prisma ORM

## Installation
To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js and PostgreSQL installed on your machine.

### Backend
1. Clone the repository:
```
git clone https://github.com/yourusername/learnup.git
cd learnup/backend
```
2. Install NPM packages:
```
npm install
```
3. Set up your environment variables. Create a .env file in the backend directory and add the following:
```
DATABASE_URL=postgresql://user:password@localhost:5432/learnup
JWT_SECRET=your_jwt_secret
```
4. Migrate the database schema:
```
npx prisma migrate dev --name init
```
5. Start the backend server:
```
npm start
```

### Frontend
1. Navigate to the frontend directory.
2. Install NPM packages:
```
npm install
```
3. Start the React development server:
```
npm run dev
```

## Preview

![image](https://github.com/user-attachments/assets/68bd8bf2-63f8-42d7-9157-020009a87974)

<br>

![image](https://github.com/user-attachments/assets/ccaf2345-77f2-4176-b5bb-1b99ef16fcd9)

<br>

![image](https://github.com/user-attachments/assets/d4298272-3601-4282-bb31-cf2b185f0fbc)

<br>

![image](https://github.com/user-attachments/assets/216b743e-f400-4c40-82e2-092a3b07ba28)

<br>

![image](https://github.com/user-attachments/assets/8ecb9048-9eae-4417-a779-da5dd49897b0)

<br>

![image](https://github.com/user-attachments/assets/cb680068-9668-4917-b2e5-d8c5b661346f)


### Usage
To use the application, navigate to http://localhost:3000 in your web browser. You can sign up for a new account or log in with an existing one to start offering or purchasing services.   
