const express = require("express");

const app = express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
require("./routes")(app);

// For cient 
app.use('/', express.static('./client/dist/client'))

require("./util/database")({
    mongo: {
        uri: process.env.MONGO_URI,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    }
})

app.listen(process.env.PORT, function () {
    console.log("Serrver Started at" + process.env.PORT );
})