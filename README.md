# React Star Wars

React Star Wars is an interactive website that allows users to choose a theme for the site's design, inspired by the Star Wars universe. The project uses React for building the user interface and contexts for managing themes.

## Features

- **Interactive Theme Selection**: Users can easily switch between Light, Dark, and Neutral themes to personalize their browsing experience.
- **Dynamic Logo Change**: The logo in the header dynamically changes based on the selected theme, enhancing the thematic consistency across the site.
- **Error Handling**: The site gracefully handles errors, providing clear messages to users when certain data is unavailable.
- **Favorites Tracking**: A feature that allows users to keep track of their favorite items, with a direct link to view their selections.

## Technology Stack

- **Frontend**: Built with React, a popular JavaScript library for building user interfaces.
- **State Management**: Uses Redux for global state management, ensuring efficient updates and predictable state container.
- **Styling**: Leverages CSS Modules for scoped CSS, allowing for modular and maintainable styles.
- **Context API**: Utilizes React's Context API for theme management, enabling easy theming across the entire app.
- **Dependencies Management**: Managed through npm, the default package manager for the JavaScript runtime environment Node.js.

## Installation and Running

To work with the project, you need to have Node.js and npm installed. After cloning the repository, run the following commands:

```bash
npm install
```

```bash
npm start
```

These commands will install all necessary dependencies and start the development server.

## Project Structure

The project is structured as follows:

- `src/containers`: Main containers of the application.
- `src/components`: User interface components.
- `src/context`: Contexts for managing the application state.
- `src/store`: Redux store and reducers.
- `src/utils`: Utilities and helper functions.
