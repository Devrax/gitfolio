import { ref } from "vue";
import { IGithubUser, IGithubUserRepo } from "../../models/github.models";
import { GET } from "./http-client";

const APIURL = 'https://api.github.com';
const APIKEY = '2b1d51b8421b2c0f0c4cdabf052ff257b573d9b5';
const USER = 'Devrax';
const STOREUSER = ref<IGithubUser | null>(null);
const STOREREPOS = ref<IGithubUserRepo[] | null>(null);

const headers: Headers = new Headers({ 
    Authorization: `token ${APIKEY}`, 
    'content-type': 'application/json; charset=utf-8', 
    'cache-control': 'public, max-age=60, s-maxage=60'
});

const USERINFORMATION = GET<IGithubUser>(`${APIURL}/users/${USER}`, { headers });

const USERREPOS = GET<IGithubUserRepo[]>(`${APIURL}/users/${USER}/repos`, { headers });

const REPOLANGUAGES = (api: string) => {
    return GET<{[props:string]: number}>(api, { headers });
}

export { 
    USERINFORMATION as getGithubUser, 
    USERREPOS as getGithubUserRepos, 
    STOREUSER as githubUser,
    STOREREPOS as githubUserRepos,
    REPOLANGUAGES as githubRepoLanguages
};
