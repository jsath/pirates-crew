const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const PORT = 8000;
const DB = "pirates"
    
require('./config/mongoose.config')(DB)

app.use(express.json(), express.urlencoded({ extended: true }));


require("./routes/routes.pirate")(app)

app.listen(PORT, () => console.log(`server running on ${PORT}`))