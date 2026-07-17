import { HttpClient } from "./HttpClient.js";

export class FetchHttpClient implements HttpClient {

    async get<T>(
        url: string,
        headers: Record<string, string> = {},
    ): Promise<T> {

        const response = await fetch(url, {
            headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json() as T;
    }

    async post<T>(
        url: string,
        body: unknown,
        headers: Record<string, string> = {},
    ): Promise<T> {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json() as T;
    }

}