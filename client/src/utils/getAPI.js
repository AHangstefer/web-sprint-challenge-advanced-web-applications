import axiosWithAuth from "./axiosWithAuth";

export async function getAPI(){
    try {const response=await axiosWithAuth().get("/api/colors")}
    catch(err){
        console.log("error from getAPI", err)
    };


}