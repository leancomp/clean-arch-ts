export class ModelProviderConfig {
    getSomethingUrl: string

    constructor(params: any) {
        this.getSomethingUrl = params.getSomethingUrl
    }
}

export class DynamoConfig {
    tableName: string
    endpoint: string

    constructor(params: any) {
        this.tableName = params.tableName
        this.endpoint = params.endpoint
    }
}