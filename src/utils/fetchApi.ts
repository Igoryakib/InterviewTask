import axios from "axios";
import { IJobItem } from "../types/interfaces/jobItem/jobItem";

axios.defaults.baseURL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy";
axios.defaults.headers.common.authorization =
  "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export const getDataArray = async (): Promise<IJobItem[]> => {
  return await (
    await axios.get("/data")
  ).data;
};
