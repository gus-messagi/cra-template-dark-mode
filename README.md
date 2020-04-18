## About the project

This project aims to create a theme change template for dark and light that can be used when creating a project in ReactJS

### Built with

- [ReactJS](https://github.com/facebook/react)
- [React Redux](https://redux.js.org/basics/usage-with-react)
- [Redux](https://redux.js.org/)
- [React Thunk](https://github.com/reduxjs/redux-thunk)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Switch](https://github.com/markusenglund/react-switch)
- [ESLint](https://eslint.org/)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Node SASS](https://github.com/sass/node-sass)

## Starting

Follow the paths below to work with this template

### Installation

```sh
npx create-react-app <YOUR_APPLICATION_NAME> --template dark-mode
```

### Folders structure

- **src** - Directory with all the application files
  - ***lib*** - Contains the parts of the application, like redux and components
    - **components** - In this folders are the application components, based on [React Atomic Design](https://github.com/danilowoz/react-atomic-design)
    - **redux** - The folder that contains redux structure for our application
    - **utils** - A help folder, it can contain things like application colors