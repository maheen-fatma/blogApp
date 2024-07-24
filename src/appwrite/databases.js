import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService{
    client = new Client();
    databases;
    storage;

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(client);
        this.storage = new Storage(client);
    }

    async newPost ({title, slug, content, image, userId }){ //to create a new post
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    userId,
                }
            );
        } catch (error) {
            throw(error);
        }
    }

    async editPost (slug, {title, content, image}){ //to edit a post
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,// databaseId
                conf.appwriteCollectionId, // collectionId
                slug, // documentId
                {
                    title,
                    content,
                    image,
                }, // data (optional)
                
            );
        } catch (error) {
            throw(error);
        }
    }

    async deletePost(slug){ //to delete a post
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost (slug){ //to get a post based upon a slug value
        try {
            return await thisdatabases.getDocument(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                slug, // documentId
                
            );
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getAllPost (){ //we may use query to filter out which posts we may want
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId,// collectionId
                
            );
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async uploadFile(file){
        try {
            await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId, // bucketId
                fileId
            );
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

const dbService = new DatabaseService()
export default dbService;