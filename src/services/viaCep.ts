import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/";

export const viaCep = axios.create({
    baseURL: BASE_URL,
});
