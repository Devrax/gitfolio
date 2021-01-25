
export interface IOverall {
    rank: number;
    name: string;
    color: string;
    score: number;
}

export interface ILanguages {
    [lang: string]: IOverall;
}

export interface IRanks {
    overall: IOverall;
    languages: ILanguages;
}

export interface ICodeChallenges {
    totalAuthored: number;
    totalCompleted: number;
}

export interface ICodewarsUser {
    username: string;
    name: string;
    honor: number;
    clan: string;
    leaderboardPosition: number;
    skills: string[];
    ranks: IRanks;
    codeChallenges: ICodeChallenges;
}

