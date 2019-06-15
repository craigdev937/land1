import express from "express";
import bodyParser from "body-parser";
import hbs from "express-handlebars";
import path from "path";
import lroute from "./routes/lroute";
import { errorHandler, notFoundError } from "./middlewares/ErrorMiddleware";

const main = async () => {
    const app: express.Application = await express();
    
    // Template Engine
    app.set("view engine", ".hbs");
    app.set("views", path.join(__dirname, "../src/views"));
    app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));

    // Middleware
    app.use(express.static(path.join(__dirname, "../src/public")));
    app.use((bodyParser.urlencoded({ extended: false })));
    app.use(bodyParser.json());

    // Routes
    app.use("/", lroute);

    const port = process.env.PORT || 9000;
    app.use(errorHandler, notFoundError);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to quit.`);
    })
};

main();

