# DeBrand Website

This repository contains the source code for the DeBrand Studio website. It is a modern web application built with a **Next.js** frontend and a **Headless WordPress** backend powered by **FrankenPHP**.

## Project Overview

The project is designed to run in a containerized environment using Docker.
- **Frontend**: A Next.js application located in the `frontend` directory.
- **Backend**: A WordPress installation running on FrankenPHP, configured via `docker-compose.yml`.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) (React Framework)
  - Tailwind CSS (Styling)
  - TypeScript
- **Backend**:
  - [WordPress](https://wordpress.org/) (Headless CMS)
  - [FrankenPHP](https://frankenphp.dev/) (Modern PHP Application Server)
  - MySQL (Database)
  - Redis (Object Cache - optional configuration present)

## Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (for local frontend development)

## Getting Started

### Production / Server Environment

This repository is designed to be run directly on the production server.

1.  **Start the Application**:
    Navigate to the repository root and run:
    ```bash
    docker compose up -d
    ```
    This command starts the WordPress backend and any other defined services in detached mode.

2.  **Verify Deployment**:
    Open your browser and navigate to:
    [www.debrandstudio.it](https://www.debrandstudio.it)

    *Note: The `docker-compose.yml` defines the backend services. The frontend is likely built and served separately or integrated via a specific build process not fully detailed in the compose file alone, but the entry point for verification is the public URL.*

### Local Development

#### Backend
To start the backend services locally:
```bash
docker compose up
```
The WordPress instance will be available at `http://localhost:8080` (based on port mapping).

#### Frontend
To work on the frontend code:

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`docker-compose.yml`**: Defines the Docker services for the application, primarily the WordPress backend.
- **`frontend/`**: Contains the Next.js application source code.
  - `app/`: App Router pages and layouts.
  - `components/`: Reusable React components.
  - `public/`: Static assets.
- **`wp-content/`**: Mapped volume for WordPress content (plugins, themes, uploads).
- **`Dockerfile`**: Custom image definition for the WordPress/FrankenPHP service.

## Testing

Tests should be run within the respective containers or environments.

- **Frontend**: Run `npm test` inside the `frontend` directory (if tests are configured).
- **Backend**: PHP tests would typically be run inside the WordPress container.

**Verification**:
The primary verification method for this production setup is to ensure all containers are running (`docker compose ps`) and the public website is accessible and functional.
