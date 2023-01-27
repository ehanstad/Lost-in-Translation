# Lost in Translation
This application is written in React and uses Redux toolkit as a state manager. It is connected to a API using JSON-server and is hosted in the platform Railway. As styling tool the application uses sass. The application initially used old Redux without Redux toolkit, however the author wanted to learn toolkit so it was changed. The application is deployed, with help of the host Vercel.

## Features
This secion will explain the applications features.

### Start page
As user you are able to create an account by writing a username in the startpage. The other two pages is protected and cannot be accessed without being logged in. 

### Translation page
In the translation page the user is able to write a text click the button and the translated sign-language symbols will be visible for the user. The text will also be stored in the API.

### Profile page
In the profile page the user have it´s ten latest translation texts visible and the possibility to delete those as well as logging out from the session.

## File structure
This secion will explain the applications file structure as well as presenting the components used.

### public
Contains the `index.hmtl`-file and the images the applicaion uses.

### src
The source folder conatins the root file `index.js` and the root component file `App.js`.

### views
In the views folder the pages is hold. It generally contains as little logic as possible. The applications has views for start page, profile page, translate page and error page and corresponing scss file.

### components
Each component has it´s own folder for easier overview of the files. The components are for login: `LoginForm` deals with logic regarding the login, for profile: `LogOut` deals with logic regarding the log out, `ProfileHistory` deals with logic regarding the showing displaying the translate history and the options to delete these and for translate: `TranslateDisplay` deals with logic regarding the dispalying the active translation, `TranslateForm` deals with logic regarding the storing the translation to user. In the session folder the component `SessionHandling` does as the name implies, handling the session, it gets the user from the cookie and dispashes it into the state so the user can reload the page, close the tab and still get the information.

### reducers
In this folder is the store and the api reducer the api reducer handles all calls to the api as well as updating the redux states.

### Component tree
The component tree was created before the application which explains the differences between the two. The api does not handle the translation into pictures as the tree implies. Translate input and translate button got replaced by translate form. Would the tree be implemented after I would probebly include both the cookie handling and Redux states to make it more clear how it all works together.
![Component tree](./public/images/Lost-in-Translation.png)

### Author
Erik Hanstad

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
