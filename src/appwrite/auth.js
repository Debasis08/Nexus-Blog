import config from '../config/config.js';
import { Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }
    

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //Call another method (Login Method)
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
            toast.error("Unable to Create an Account !",
            {theme: "colored"})
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
            toast.error("Unable to Login !",
            {theme: "colored"})
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            toast.error("Unable to Fetch Data !",
            {theme: "colored"})
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            toast.error("Unable to Logout !",
            {theme: "colored"})
            console.log("Appwrite Service :: logOut :: error", error);
            
        }
    }
}

const authService = new AuthService ();

export default authService
