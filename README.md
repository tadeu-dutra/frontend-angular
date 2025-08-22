# Angular Study Project

This project is an Angular-based web application structured with reusable components, services, and views. It serves as an assessment project for a postgraduate course module on Front-End with HTML CSS, Javascript and Angular.

## Purpose

The primary goal of this project was to:

*   Exercise key concepts and practices in modern front-end development with Angular 20.
*   Demonstrate understanding of core Angular features like components, services, routing, and data binding.
*   Implement a simple application that showcases learned techniques within the module.
*   Explore the integration of UI component libraries (like Angular Material).
*   Practice setting up and interacting with a mock backend using json-server.

## Features

*   **UI Components:** Usage of Angular Material components for improved user interface and experience (e.g., Header, Footer, Nav Menu).
*   **Styling:** Application of styles using SCSS.
*   **Data Display:** Pages/views to display lists or details of Movie Documentaries.
*   **Data Management (Mock):** Functionality to interact with data (e.g., create, read) simulated via a local JSON server.
*   **Routing:** Navigation on Nav Menu using Angular Router.

## Technologies Used

*   **Angular:** The core framework for building the application.
*   **TypeScript:** The primary language used for development.
*   **Angular CLI:** Command line interface for building and managing Angular projects.
*   **Angular Material:** UI component library.
*   **Node.js / npm:** Package manager.
*   **JSON Server:** Used to create a fake REST API for the mock backend (`db.json`, `server.js`).

## Setup and Installation

To get this project running locally, follow these steps:

1.  **Clone the repository:**

    git clone https://github.com/tadeu-dutra/frontend-angular

2.  **Install dependencies:**

Make sure you have Node.js and npm (or yarn) installed. Then run:

    npm install

3.  **Set up the Mock Backend:**

This project uses a local JSON server to simulate a backend API.
You'll need to [install the `json-server`](https://www.npmjs.com/package/json-server) package globally or as a dev dependency if you haven't already:

To start the mock server, navigate to the project root and run:

    json-server --watch db.json --port 3000

Or simply run the already configured script defined in package.json:

    json:server

## How to Run the Project

1.  **Start the Mock Backend:** Ensure the JSON server is running (as described in the "Setup" section).
2.  **Start the Angular Development Server:** In a separate terminal window, navigate to the project root and run the Angular development server:

    npm start

3.  **Open in Browser:** The application will typically be served at `http://localhost:4200/`. Open your web browser and navigate to this address.

The app will automatically reload if you change any of the source files.

## Project Structure

SRC
│
├── index.html           # Entry point
├── main.ts              # Bootstraps Angular app
├── styles.css           # Global styles
├── custom-theme.scss    # Theme customization
│
├── app                  # Core Angular application
│   ├── app.html
│   ├── app.ts
│   ├── app.routes.ts
│   ├── app.config.ts
│   ├── material.imports.ts
│   ├── shared.imports.ts
│   │
│   ├── components
│   │   ├── movie
│   │   │   ├── movie.model.ts
│   │   │   ├── movie.service.ts
│   │   │   ├── movie-create / delete / retrieve / update
│   │   │
│   │   ├── shared (dialog, shared services)
│   │   └── template (header, footer, navigation)
│   │
│   └── views
│       ├── home
│       └── movies
│
├── assets               # Static files (images, icons)
└── environments         # Environment configurations

## Key Folders

    app/: Main application logic (modules, routing, configs)
    components/: UI components (CRUD for movies, shared dialogs, templates)
    views/: Page-level components (home, movies)
    services/: Business logic and data handling
    environments/: Environment-specific configs

## Author

Tadeu Augusto Dutra Pinto

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tadeuaugustodutrapinto/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tadeu-dutra)


## License

This project is for educational purposes and is not intended for production use.


