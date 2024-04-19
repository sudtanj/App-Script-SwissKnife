export interface GetEvent {
    parameter: Parameter
    contextPath: string
    contentLength: number
    queryString: string
    parameters: Parameters
    postData: {
        length: number
        type: string
        contents: string
        name: string
    }
}

export interface Parameter {
    [key: string]: string
}

export interface Parameters {
    [key: string]: string[]
}
