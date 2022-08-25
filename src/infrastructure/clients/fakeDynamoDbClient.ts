export class FakeDynamoDbClient {
    async addOne(tableName: string, document: any) {
        return Promise.resolve()
    }

    async query(params: any) {
        return Promise.resolve({ Items: []})
    }
}