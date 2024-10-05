import axios from "axios";

export default async function getPhotos(value, page = 1) {
  const URL = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: "wyTI2Rls2EIXrXuEtAj0kMxZ65nb2lOZr3nJEA0LrCw",
    query: value,
    per_page: 15,
    page,
  };

  return await axios.get(URL, { params });
}