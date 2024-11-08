# Spaak Kanban Project

This project is an MVP of a Kanban board application built with Next.js, Prisma, and Tailwind CSS. The data is stored in a PostgreSQL database.

## Project Structure

- **/prisma**: Contains all migrations and type definitions for Prisma ORM.
- **/app/api**: Contains all API routes for updating and fetching data to display in the frontend.
- **/app/components**: Contains all reusable components.
- **/utils**: Contains type definitions and utilities for mapping the data.

## Important Note

As this is an MVP implementation of a Kanban project, it contains credentials in `.env` and `docker-compose.yml`. For production usage, credentials should be managed securely and not committed to the repository.

## Running the Project

1. Start the Docker containers:
    ```sh
    docker compose up -d
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the Prisma migrations:
    ```sh
    npx prisma migrate dev --name update-govdata-schema
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

5. Populate the database with the latest API data by visiting:
    ```
    http://localhost:3000/api/update
    ```

6. Browse the Kanban board at:
    ```
    http://localhost:3000
    ```
