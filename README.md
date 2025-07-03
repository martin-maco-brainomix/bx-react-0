# BX-React-0 project
This project is a very entry to the React development. It contains lots of comments and explanations why things are written how they are written.

This project was created using the Vite script with a React template. Look for the documentation on how to create React projects using Vite (literally one command).

I've added some prettier and eslint configurations inside this project. Look into `package.json` file and it's devDependencies.

There also is `eslint.config.js` and `.prettierrc` config files. For your own future projects, I recommend simply copy+paste those files and making your IDE use those configs.

To run this:
- make sure you have nodejs version 22
  - `node -v`
  - `nvm install --lts` (if no node or incorrect version)
- `npm install`
- `npm start`

I'm leaving here the original project description.

---
Original description below:

---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
