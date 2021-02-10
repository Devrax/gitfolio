// Codewars request doesn't work on localhost so use proxy automatically instead
const isProd = import.meta.env.PROD;
/**
 * For local use purpose
 */
const proxy = 'https://cors-anywhere.herokuapp.com/';

// This API enables cross-origin requests to anywhere.
const GET = <T>(api: string, headers?: RequestInit, allowCORS?: boolean) => {
    headers = !!headers ? {...headers, method: 'GET' } : { method: 'GET' };

    api = !!allowCORS && !isProd ? `${proxy}${api}` : api;

    return async (): Promise<T> => {
        const request = await fetch(api, headers);
        return request.json()
    }
};

export { GET }