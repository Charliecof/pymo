// Dependencies
const express = require("express");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');
const {
	logError,
	errorHandler,
	errorNotFoud,
} = require("./src/middleware/error.middleware");

// Configuration
const app = express();
require("dotenv").config();
const swaggerConfig = {
	definition: {
        openapi: '3.0.0',
		info: {
			title: "Pymo API",
            version: '1.0.0',
			description: "API para administracion de insumos    ",
		},  
		servers: [{ url: "http://localhost:3001" }],
	},
	apis: ["./src/routes/*.js"],
};

const swagerDocs = swaggerJSDoc(swaggerConfig);

// Routes
const hospitalRoutes = require("./src/routes/hospital.routes");
const insumosRoutes = require("./src/routes/insumos.routes");
const paqueteRoutes = require("./src/routes/paquetes.routes");
const peticionesRoutes = require("./src/routes/peticiones.routes");
const casosRoutes = require("./src/routes/casos.routes");

// MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routing
app.use("/hospital", hospitalRoutes);
app.use("/insumos", insumosRoutes);
app.use("/paquete", paqueteRoutes);
app.use("/peticiones", peticionesRoutes);
app.use("/casosRoutes", casosRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagerDocs));
app.use("*", errorNotFoud);

// ERRRORS
app.use(logError);
app.use(errorHandler);

app.listen(process.env.PORT || 3001);
