const express = require("express")
const connection = require("./Modules/DbConnection");
const bodyparser = require("body-parser");
const products = require("./Routes/ProductRoute");
const signup = require("./Routes/SignupRoute");
const address = require("./Routes/AddressRoute");
const orders = require("./Routes/OrdersRoutes");


const app = express();
const PORT = 4000;

const cors = require("cors");




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

app.use(products);
app.use(signup);
app.use(address);
app.use(orders);


app.get('/', (req , res)=>{
    res.send("Server is running fine and Welcome to the Ecommerce website project");
})


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})