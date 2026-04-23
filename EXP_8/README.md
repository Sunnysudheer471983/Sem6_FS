# LivePoll System - Experiment 8

This experiment demonstrates app security and full-stack integration using Spring Boot backend with Spring Security and OAuth2 Google Login, and a React frontend.

## Backend Setup

1. Navigate to `backend` folder.
2. Update `application.properties` with your Google OAuth client ID and secret.
3. Run `mvn spring-boot:run` to start the backend on port 8080.

## Frontend Setup

1. Navigate to `frontend` folder.
2. Run `npm install`.
3. Run `npm run dev` to start the frontend on port 5173.

## Features

- Spring Security with OAuth2 Google Login
- Role-based access control (basic setup)
- CORS enabled for frontend-backend communication
- REST APIs secured with authentication

## Next Steps

- Implement poll creation and voting APIs
- Add USER and ADMIN roles
- Enhance frontend with login UI and poll components