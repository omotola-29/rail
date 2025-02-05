const express = require ('express');
const morgan = require ('morgan');
const dotenv = require ('dotenv');
const connectDb = require('./src/config/db');
const railRoutes = require('./src/routes/rail.route')

dotenv.config();
const app =express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Weelcome to my Rail API');
});

app.use('/api/v1', railRoutes)


app.listen(port, () => {
connectDb();
    console.log(`server is running on port ${port}`);
    
}) 