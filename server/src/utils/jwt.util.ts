import jwt,{SignOptions} from "jsonwebtoken";
import config from 'config';

export const signJwt = (payload:Object,key:'accessTokenPrivateKey',options:SignOptions={})=>{
    const secretKey = Buffer.from(config.get<string>(key),'base64').toString('ascii');
    return jwt.sign(payload,secretKey,{...(options&&options)})
};

export const verifyJwt =<T> ( token: string,key:'accessTokenPrivateKey'):T|null =>{
    try{

        const secretKey = Buffer.from(config.get<string>(key),'base64').toString('ascii');
        return jwt.verify(token,secretKey) as T;
    }catch(err){
        return null;
    }
}

