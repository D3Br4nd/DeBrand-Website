# DeBrand Website

<div align="center">
  <img src="assets/logo-1.png" alt="Logo 1" width="200" />
  <img src="assets/logo-2.png" alt="Logo 2" width="200" />
</div>

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

- **`docker-compose.yml`**: Defines the Docker services for the application.
- **`frontend/`**: Contains the Next.js application source code.
  - `app/`: App Router pages and layouts.
  - `components/`: Reusable React components.
  - `public/`: Static assets.
- **`backend/`**: Contains the WordPress backend configuration and source.
  - `wordpress/`: Mapped volume for WordPress core and content.
  - `mu-plugins/`: Must-Use plugins.
  - `Dockerfile`: Custom image definition for the WordPress/FrankenPHP service.
  - `Caddyfile`: Caddy web server configuration.
  - `php.ini`: Custom PHP configuration.

## Manual WordPress Installation / Upgrade

If you need to manually install or upgrade WordPress (e.g., to use the Italian version), follow these steps:

1.  **Download WordPress**:
    Download the latest version from the official Italian site:
    [https://wordpress.org/latest.tar.gz](https://wordpress.org/latest.tar.gz)

2.  **Extract Files**:
    Extract the contents of the downloaded zip file into the `backend/wordpress` directory.
    Ensure the files are directly in `backend/wordpress` (e.g., `backend/wordpress/index.php`), not in a subdirectory like `backend/wordpress/wordpress`.

3.  **Fix Permissions**:
    After extracting, you must ensure the permissions are correct so the web server can read/write them and you can edit them locally. Run this command from the project root:

    ```bash
    # Entra nella cartella backend
    cd backend

    # Scarica WP
    curl -O https://wordpress.org/latest.tar.gz

    # Estrai e sposta i file nella cartella 'wordpress' che hai mappato
    # (Assumendo che ./backend/wordpress esista già, altrimenti mkdir)
    tar -zxf latest.tar.gz
    # Ora avrai una cartella 'wordpress' creata dal tar. 
    # Se la tua struttura era diversa, aggiusta i path.

    # Pulizia
    rm latest.tar.gz

    # 1. Assegna proprietario (utente 82 = www-data su Alpine) a tutto il path
    docker exec -u 0 debrand_backend_www chown -R 82:82 /app/public

    # 2. Permessi Cartelle a 755
    docker exec -u 0 debrand_backend_www find /app/public -type d -exec chmod 755 {} +

    # 3. Permessi File a 644
    docker exec -u 0 debrand_backend_www find /app/public -type f -exec chmod 644 {} +

    sudo chown -R $USER:$USER backend/wordpress backend/mu-plugins
    ```

    *Note: The container runs as `www-data`, but mapping the volume with your user ownership usually works fine for development. If the container complains about permissions, you might need to make them writable by others or adjust the container user.*

## Testing

Tests should be run within the respective containers or environments.

- **Frontend**: Run `npm test` inside the `frontend` directory (if tests are configured).
- **Backend**: PHP tests would typically be run inside the WordPress container.

**Verification**:
The primary verification method for this production setup is to ensure all containers are running (`docker compose ps`) and the public website is accessible and functional.
