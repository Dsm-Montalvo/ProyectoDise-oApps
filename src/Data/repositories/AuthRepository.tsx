import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { User } from "../../Domain/entities/User";
import { Api } from "../Source/remote/api/Api";
import { ResponseApi } from "../Source/remote/models/ResponseApi";

export class AuthRepositoryImpl implements AuthRepository{
    async register(user: User){
        try{
            const response= await Api.post<ResponseApi>('user', user);
            console.log("RESPONSE ",JSON.stringify(response.data));
            return Promise.resolve({
                error:undefined,
                result: response.data
            });
        }
        catch(error){
            let e = (error as Error).message;
            console.log('ERROR: ', e);
            return Promise.resolve({
                error: e,
                result: undefined,
            }); 
        }
    }
}