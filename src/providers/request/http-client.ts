// This API enables cross-origin requests to anywhere.
const proxy = 'https://cors-anywhere.herokuapp.com/';


const GET = <T>(api: string, headers?: RequestInit, allowCORS?: boolean) => {
    headers = !!headers ? {...headers, method: 'GET' } : { method: 'GET' };

    api = !!allowCORS ? `${proxy}${api}` : api;

    return async (): Promise<T> => {
        const request = await fetch(api, headers);
        return request.json()
    }
};

export { GET }