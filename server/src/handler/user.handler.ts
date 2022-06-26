import {omit} from "lodash";
import config from "config";
import { signJwt } from "../utils/jwt.util";

interface Users{
    username:string;
    password:string;
    email:string
}

export const createUser = (input:Partial<Users>)=>{
    


}