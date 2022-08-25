import { inject, injectable } from 'tsyringe'

import { Suggestion } from '../entities/suggestion'
import { SuggestionsProvider } from '../repositories/suggestionsProvider'

@injectable()
export class GetSuggestions {
    constructor (@inject('SuggestionsProvider') private suggestionsProvider: SuggestionsProvider) {
    }

    async do (userId: number, start: Date, end: Date): Promise<Suggestion[]> {
        return this.suggestionsProvider.getFor(userId, start, end)
    }

}