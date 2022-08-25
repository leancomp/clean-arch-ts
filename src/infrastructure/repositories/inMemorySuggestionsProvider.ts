import { SuggestionsProvider } from '../../domain/repositories/suggestionsProvider'
import { Suggestion } from '../../domain/entities/suggestion'

export class InMemorySuggestionsProvider implements SuggestionsProvider {
    private readonly memoryDic: any
    constructor() {
        this.memoryDic = {}
    }

    async addOne(suggestion: Suggestion): Promise<Suggestion> {
        console.log('[InMemorySuggestionsProvider] addOne()', suggestion)
        let partition = this.memoryDic[suggestion.userId]
        if (!partition) {
            this.memoryDic[suggestion.userId] = partition = []
        }
        partition.push(suggestion)
        return suggestion
    }

    async getFor(userId: number, start: Date, end: Date): Promise<Suggestion[]> {
        console.log('[InMemorySuggestionsProvider] getFor()', { userId, start, end })
        const partition = this.memoryDic[userId]
        if (!partition) {
            return []
        }
        return partition.filter(({ date }: Suggestion) => date >= start && date<= end)
    }

}