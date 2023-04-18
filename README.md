# MERN-Finance-Dashboard-react-typescript

https://github.com/ed-roh/finance-app

Build A MERN Finance Dashboard App | Machine Learning, Typescript, React, Node, MUI, Deployment
https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&ab_channel=EdRoh

# starting up project and installations

    yarn create vite
    project name ->client
    react
    typescript

    cd client
    yarn install
    yarn add react-redux @reduxjs/toolkit react-router-dom

    yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid
    yarn add -D @types/react //not needed on final build but while developing relevant

<!--    package for a specific library -->

deleted app.css
in app.tsx cleanup

    function App() {
    return (
    <div className="app">
    </div>
    )
    }
    export default App

**clear index.css content and add fonts**

we are adding our own google font, searching for inter choose 400,600,700

    select @import and copy @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

inside styles and paste it in index.css

**yarn add -D eslint eslint-config-react-app**

add .eslintrc.json in client

    {
    "extends":"react-app"
    }

configure eslinting on the basis of this

in tsconfig.json add

    "types":["vite/client"]

to use .env without giving errors

**we have to do absolute import that are easier to digest**

`yarn add -D @types/node`

so

**in vite.config file**

    import path from "path";
    resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },

**in tsconfig.json**

    "paths": {
    "@/_": ["./src/_"]
    },`

## theming

copy theme.ts into src

tailwind shades extension and to generate different color shades we can add one color and cmd k cmd g it will generate

expanded-theme.ts add code and ctr click palettecolor and doubleclick which opens createPalette.d.ts
grey and background already exist there bt not tertiary so added in expanded-theme.ts
theme settings in theme file is used in app.tsx

     npm run dev

http://127.0.0.1:5173/

alt+click

**tsrafce**

` https://grid.malven.co/`

grid cheatcheat

**grid-template-areas**

`https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas`

**code explanation**

    <Box width="100%" height="100%" display="grid" gap="1.5rem"

    sx={{
                gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
                gridTemplateRows: "repeat(10,minmax(60px,1fr))",
                gridTemplateAreas: gridTemplate
            }}>

The grid container has a width and height of 100%, and a grid gap of 1.5rem. It is set up with 3 columns and 10 rows, and the width of each column is set to a minimum of 370px and a maximum of 1fr (a flexible unit that represents a fraction of the available space). The height of each row is set to a minimum of 60px and a maximum of 1fr. The grid items are then placed within the grid using the grid-template-areas property, which refers to a variable called "gridTemplate".

**What is the purpose of this code?**

This code is the main entry point for the React application. It sets up the theme, router, and routes for the application.

**What libraries are being used in this code?**

This code is using React, React Router, Material-UI, and CSS Baseline.

**What is the purpose of the useMemo hook?**

The useMemo hook is used to memoize the theme object created by the createTheme function. This means that the theme object will only be created once on initial load and will not be recreated on subsequent renders unless the dependencies array changes.

**What is the purpose of the BrowserRouter component?**

The BrowserRouter component is used to provide client-side routing for the application. It listens for changes to the URL and renders the appropriate component based on the current URL.

**What is the purpose of the ThemeProvider component?**

The ThemeProvider component is used to provide the theme object to all child components in the application. This allows for consistent styling across the entire application.

**What is the purpose of the CssBaseline component?**

The CssBaseline component is used to apply a baseline CSS reset to the application. This ensures that the application looks consistent across different browsers and devices.

**What is the purpose of the Box component?**

The Box component is used to create a container with predefined styles. In this code, it is used to create a container for the Navbar and Routes components.

**What is the purpose of the Routes component?**

The Routes component is used to define the routes for the application. It listens for changes to the URL and renders the appropriate component based on the current URL.

**What is the purpose of the Route component?**

The Route component is used to define a single route for the application. It specifies the path for the route and the component to render when the path is matched.

## Here's an example of how to set up a createApi query

    import { createApi } from '@reduxjs/toolkit/query';

    const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
    endpoints: (builder) => ({
    getUsers: builder.query({
    query: () => '/users',
    }),
    }),
    });

    export const { useGetUsersQuery } = apiSlice;

**importing useGetUsersQuery**

    import { useGetUsersQuery } from './apiSlice';

    function UsersList() {
    const { data, error, isLoading } = useGetUsersQuery();

    if (isLoading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    return (

    <ul>
    {data.map((user) => (
    <li key={user.id}>{user.name}</li>
    ))}
    </ul>
    );
    }

In this example, we use the useGetUsersQuery hook to execute the

getUsers query and retrieve the data. The hook returns an object that includes the data , error , and isLoading properties, which we can use to render the appropriate content in our component.

## -------------------BACKEND------------------------------------------

    `mkdir server
    cd server
    npm init -y //initialise package with default settings
    yarn add express body-parser cors dotenv helmet morgan mongoose mongoose-currency`

**For diagrams for data modelling can use**

`https://lucid.app/documents#/dashboard`


**charts using -recharts**/ can also use **NYlo**