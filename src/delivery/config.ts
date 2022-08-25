import {DynamoConfig, ModelProviderConfig} from "../infrastructure/config"

export const Config = {
    environment: process.env.ENVIRONMENT,
    dynamodb: new DynamoConfig({
        tableName: `cor-${process.env.ENVIRONMENT}-suggestions`,
        apiVersion: '2012-08-10',
        endpoint: process.env.ENVIRONMENT === 'local' ? 'http://dynamodb-local:8000' : undefined,
    }),
    modelProvider: new ModelProviderConfig({
        getSomethingUrl: 'http://corModel:3000/something'
    })
}