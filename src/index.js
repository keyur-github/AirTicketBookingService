const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig') ;
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setUpAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {

        console.log(`Server is started on ${PORT}`);

        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

    });



}

setUpAndStartServer();
