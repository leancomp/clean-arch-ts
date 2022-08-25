import { inject, injectable } from 'tsyringe'

import { DynamoConfig } from '../config'
import { SuggestionsProvider } from '../../domain/repositories/suggestionsProvider'
import { Suggestion } from '../../domain/entities/suggestion'
import { FakeDynamoDbClient } from '../clients/fakeDynamoDbClient'

@injectable()
export class DynamoSuggestionsProvider implements SuggestionsProvider {
    private readonly tableName: string

    constructor(
        @inject('DynamoDbClient') private client: FakeDynamoDbClient,
        @inject('DynamoConfig') config: DynamoConfig) {
        this.tableName = config.tableName
    }

    async addOne(suggestion: Suggestion): Promise<Suggestion> {
        console.log('[DynamoSuggestionsProvider] addOne()', suggestion)
        const { userId, date, ...rest} = suggestion
        const document = {
            PK: userId,
            SK: date,
            ...rest
        }
        await this.client.addOne(this.tableName, document)
        return suggestion
    }

    async getFor(userId: number, start: Date, end: Date): Promise<Suggestion[]> {
        console.log('[DynamoSuggestionsProvider] getFor()', { userId, start, end })
        const { Items } = await this.client.query({
            TableName: this.tableName,
            KeyConditionExpression: 'PK = :pk and SK BETWEEN :start AND :end',
            ExpressionAttributeValues: {
                ':pk': userId,
                ':start': start.toISOString(),
                ':end': end.toISOString()
            }
        })
        return Items.map(({ PK: userId, SK: date, value }: any) => new Suggestion(userId, date, value))
    }

}