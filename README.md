# MERN-Finance-Dashboard-react-typescript

https://github.com/ed-roh/finance-app

Build A MERN Finance Dashboard App | Machine Learning, Typescript, React, Node, MUI, Deployment
https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&ab_channel=EdRoh

yarn create vite
project name ->client
react
typescript

cd client
yarn install
yarn add react-redux @reduxjs/toolkit react-router-dom

yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid
yarn add -D @types/react //not needed on final build but while developing relevant //package for a specific library

deleted app.css
in app.tsx cleanup
function App() {

return (

<div className="app">

    </div>

)
}

export default App

clear index.css content

we are adding our own google font, searching for inter choose 400,600,700
select @import and copy @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
inside styles and paste it in index.css
yarn add -D eslint eslint-config-react-app

add .eslintrc.json in client
{
"extends":"react-app"
}
configure eslinting on the basis of this

in tsconfig.json add "types":["vite/client"] to use .env without giving errors

we have to do absolute import that are easier to digest
yarn add -D @types/node

so
in vite.config file import path from "path";
resolve: {
alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
},
in tsconfig.json
"paths": { "@/_": ["./src/_"] },
