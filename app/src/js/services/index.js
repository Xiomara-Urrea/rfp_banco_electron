import axios from 'axios';

import { apiUrl } from '../utils/http'

export async function makeRequestAsync(sufix = "/", method = "GET", payload = {}, headers = false) {
    try {

        const general = { method };

        if (method === "POST" || method === "PUT") {
            general.method = method;
            general.data = payload;
        }

        if (headers) {
            general.headers = { "Content-Type": "application/json" };
        }

        general.config = { headers: { "Content-Type": "application/json" } };

        const url = `${apiUrl}${sufix}`
        const response = await axios(url, general);
        return response;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}