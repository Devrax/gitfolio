import { ref } from "vue";
import { ICodewarsUser } from "../../models/codewars.model";
import { GET } from "./http-client";

const APIURL = `https://www.codewars.com/api/v1`;
const APIKEY = 'yd5fey-RPVqViXyhp7vm';
const USER = 'Devrax';

const STOREUSER = ref<ICodewarsUser | null>(null);

const headers: Headers = new Headers({ 
    Authorization: APIKEY, 
    'content-type': 'application/json; charset=utf-8', 
    'cache-control': 'public, max-age=60, s-maxage=60'
});

const USERINFORMATION = GET<ICodewarsUser>(`${APIURL}/users/${USER}`, { headers }, true);

export { 
    USER, 
    USERINFORMATION as getCodewarsUser, 
    STOREUSER as codewarsUser 
};