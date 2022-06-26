import express,{Request,Response,NextFunction} from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import config from "config";

// app 
const app = express();

// body parser
app.use(express.json());

app.use(express.urlencoded({extended:true}))

// console.log(process.env.NODE_ENV)
// logger
if(process.env.NODE_ENV === 'devlopment') app.use(morgan('dev'))

// cors
app.use(cors(config.get("corsOtions")))

// testroute
app.get("/test",async(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send({
        status:"success",
        message:"hi this is a test route"
    })
    return;
})

//unknown routes

// global error handler


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})