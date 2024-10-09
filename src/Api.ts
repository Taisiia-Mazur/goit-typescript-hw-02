import axios from "axios";
import { TypeForApi } from "./generalTypes";

export default async function getPhotos<TypeForApi>(
  value: string,
  page: number = 1
): Promise<TypeForApi> {
  const URL = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: "wyTI2Rls2EIXrXuEtAj0kMxZ65nb2lOZr3nJEA0LrCw",
    query: value,
    per_page: 15,
    page,
  };

 const {data} = await axios.get(URL, { params });
  
  return data;
}
