import { ref } from "vue";
import { IGithubUser, IGithubUserRepo } from "../../models/github.models";
import { GET } from "./http-client";

const APIURL = 'https://api.github.com';
const USER = 'Devrax';
const STOREUSER = ref<IGithubUser | null>(null);
const STOREREPOS = ref<IGithubUserRepo[] | null>(null);

const USERINFORMATION = GET<IGithubUser>(`${APIURL}/users/${USER}`);

const USERREPOS = GET<IGithubUserRepo[]>(`${APIURL}/users/${USER}/repos`);

const REPOLANGUAGES = (api: string) => {
    return GET<{[props:string]: number}>(api);
}

export { 
    USERINFORMATION as getGithubUser, 
    USERREPOS as getGithubUserRepos, 
    STOREUSER as githubUser,
    STOREREPOS as githubUserRepos,
    REPOLANGUAGES as githubRepoLanguages
};
