import { ICodewarsUser } from "../../../models/codewars.model";
import { IGithubUser, IGithubUserRepo } from "../../../models/github.models";

interface IExpirableData {
    store: IGithubUser | IGithubUserRepo[] | ICodewarsUser;
    expireIn: number;
}

export function updateStore(
    token: 'devrax:github' | 'devrax:github_repo' | 'devrax:codewars' | string, 
    data: IGithubUser | IGithubUserRepo[] | ICodewarsUser
    ): Promise<null | IGithubUser | IGithubUserRepo[] | ICodewarsUser> {
    return new Promise((res, rej) => {
        try{
            localStorage.setItem(token, JSON.stringify({store: data, expireIn: Date.now() + 14400000}));
            res(data);
        } catch(err) {
            console.warn('[STORAGE] Storage may be not present in this browser');
            console.error(`[STORAGE] I couldn't update your storage`);
            rej(null)
        }
    })
}

export function getStoreData(tk: string): Promise< IGithubUser | IGithubUserRepo[] | ICodewarsUser | null> {
    return new Promise((res) => {
        const value = localStorage.getItem(tk);

        if(value == null) res(null);

        const { store, expireIn }: IExpirableData = JSON.parse(value!);
        
        if(hasExpired(expireIn)) res(null);

        res(store);
    });
}

const hasExpired = (time: number) => time < Date.now();