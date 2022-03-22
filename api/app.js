// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const {
	logError,
	errorHandler,
	errorNotFoud,
} = require("./src/middleware/error.middleware");

// Configuration
const app = express();
require("dotenv").config();


// Routes
const hospitalRoutes = require("./src/routes/hospital.routes");
const insumosRoutes = require("./src/routes/insumos.routes");
const paqueteRoutes = require("./src/routes/paquetes.routes");
const peticionesRoutes = require("./src/routes/peticiones.routes");
const casosRoutes = require("./src/routes/casos.routes");
const bodegaRoutes = require('./src/routes/bodega.routes');

// MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// Routing
app.use("/hospitales", hospitalRoutes);
app.use("/insumos", insumosRoutes);
app.use('/bodega',bodegaRoutes);
app.use("/paquete", paqueteRoutes);
app.use("/peticiones", peticionesRoutes);
app.use("/casosRoutes", casosRoutes);
app.use("*", errorNotFoud);

// ERRRORS
app.use(logError);
app.use(errorHandler);

app.listen(process.env.PORT || 3001,()=>{
	console.log('Server running...');
});
