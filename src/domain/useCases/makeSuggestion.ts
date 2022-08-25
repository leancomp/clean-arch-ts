import { inject, injectable } from 'tsyringe'

import { SuggestionsProvider } from '../repositories/suggestionsProvider'
import { ModelProvider } from '../repositories/modelProvider'
import { Suggestion } from '../entities/suggestion'

@injectable()
export class MakeSuggestion {
    constructor (
        @inject('ModelProvider') private modelProvider: ModelProvider,
        @inject('SuggestionsProvider') private suggestionsProvider: SuggestionsProvider) {
    }

    async do (userId: number, date: Date): Promise<Suggestion> {
        const something = await this.modelProvider.getSomething(userId)
        const suggestion = new Suggestion(userId, date)
        suggestion.calculateValue(something)
        return this.suggestionsProvider.addOne(suggestion)
    }

}