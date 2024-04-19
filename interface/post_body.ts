
export enum PostBodyPath {
    IS_TODAY_OUT_OF_OFFICE = "IS_TODAY_OUT_OF_OFFICE"
}

export interface PostBody {
    path: PostBodyPath
    secretToken: string
}