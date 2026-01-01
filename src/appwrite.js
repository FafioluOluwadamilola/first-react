import { Client, Databases, Query } from "appwrite";


const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
   //1 use Apppwrite SDK to check if search term exist in the database
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, queries: [
            Query.equal("searchTerm", searchTerm)
        ])

        if(result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, )
        }

    } catch (error) {
        console.log(error)
    }

   //2 if exist, update the count field by 1
   //3 if not exist, create a new record with count field set to 1
}