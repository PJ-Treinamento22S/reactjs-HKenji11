import axios from "axios";

const getApi = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc2NDY3MjIsImV4cCI6MTY0NzczMzEyMiwic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.RWuzC7tKY_NClm3GWDbpOeiV-5XeLE7cpDFUVKmpQzM";
  const api = axios.create({
    baseURL: "https://piupiuwer.polijrinternal.com",
  });

  (api.defaults.headers as any).Authorization = token;

  return api;
};

export default getApi;
