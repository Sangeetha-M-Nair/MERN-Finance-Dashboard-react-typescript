mkdir server
cd server
npm init -y //initialise package with default settings
yarn add express body-parser cors dotenv helmet morgan mongoose mongoose-currency

to use import statements

do `type: module` in package.json

    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    app.use(morgan("common"));

This code sets up middleware for a Node.js application.

The first line sets up the Helmet middleware to add security-related HTTP headers to the responses sent by the application. Specifically, it sets the Cross-Origin Resource Policy header to "cross-origin", which restricts cross-origin requests to only those that have a specific origin.
The second line sets up the Morgan middleware to log HTTP requests to the console in a common format.
The third line sets up the bodyParser middleware to parse incoming JSON data in the request body and make it available in the req.body object.

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

first line sets up the bodyParser middleware to parse incoming JSON data.
The second line sets up the bodyParser middleware to parse incoming URL-encoded data with the "extended" option set to false, which means that the values can be strings or arrays but not nested objects.
