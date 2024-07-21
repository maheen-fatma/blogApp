import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
export class AuthService {
     client = new Client();
     account;

     constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
     }

     async createAccount ({email, password, name}) 
     {
        try {
            const user = await account.create(
                ID.unique(), 
                email, 
                password,
                name
            );
            
            if(user) //the user might not be able to complete auth due to some reason
            {
                //
            }
            else
            {
               return user 
            }
            
            
        } catch (error) {
            throw(error)
        }
     }
}

const authService = new AuthService();

export default authService;