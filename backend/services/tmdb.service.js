import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (uri) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.TMDB_API,
    },
  };
  const response = await axios.get(uri, options);

  if (response.status != 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }

  return response.data;
};
