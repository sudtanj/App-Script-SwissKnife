
export enum PostBodyPath {
    IS_TODAY_OUT_OF_OFFICE = "IS_TODAY_OUT_OF_OFFICE",
    GOG_TOKEN = "GOG_TOKEN"
}

export interface PostBody {
    path: PostBodyPath
    secretToken: string
}