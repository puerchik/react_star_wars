# React Star Wars

React Star Wars is an interactive website that allows users to choose a theme for the site's design, inspired by the Star Wars universe. The project uses React for building the user interface and contexts for managing themes.

## Component Descriptions

### HomePage

The main page of the project, where users can select the site's theme.

### Header

Header component displaying a navigation menu and a logo that changes depending on the selected theme.

### ChooseTheme

Component for choosing the site's theme. Offers users three options: Light Side, Dark Side, and Neutral theme.

### ErrorMessage

Displayed when there is an error, such as when trying to load data that is unavailable.

### Favorite

Component showing the number of favorite items and a link to the favorites page.

### PeopleList

List of Star Wars characters displayed on a separate page.

## Installation and Running

To work with the project, you need to have Node.js and npm installed. After cloning the repository, run the following commands:

`npm install`

`npm start`

These commands will install all necessary dependencies and start the development server.

## Project Structure

The project is structured as follows:

- `src/containers`: Main containers of the application.
- `src/components`: User interface components.
- `src/context`: Contexts for managing the application state.
- `src/store`: Redux store and reducers.
- `src/utils`: Utilities and helper functions.
