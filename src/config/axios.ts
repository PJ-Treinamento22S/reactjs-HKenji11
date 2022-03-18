import axios from "axios";

const getApi = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc1NTk0NzMsImV4cCI6MTY0NzY0NTg3Mywic3ViIjoiZTE3NjNhYzgtMmQwOS00MWI3LTkzYjctZDhiY2M3ZjJkZDcyIn0.wXXYdxyxzE2rK88xUWwcuqDHaBon0KIgOISoH494sjE";
  const api = axios.create({
    baseURL: "https://piupiuwer.polijrinternal.com",
  });

  (api.defaults.headers as any).Authorization = token;

  return api;
};

export default getApi;
