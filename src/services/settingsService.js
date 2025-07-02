import { createOpeningHours, deleteOpeningHours, fetchOpeningHours } from "../api/settingsApi";

export const getOpeningHours = async () => {
   let response;

    try {
        response = await fetchOpeningHours();
    } catch (error) {
        response = error.response;
    }

    return response;
}

export async function addOpeningHours (data) {
   let response;

    try {
        response = await createOpeningHours(data);
    } catch (error) {
        response = error.response;
    }

    return response;
}

export async function removeOpeningHours (id) {
    let response;
 
     try {
         response = await deleteOpeningHours(id);
     } catch (error) {
         response = error.response;
     }
 
     return response;
 }