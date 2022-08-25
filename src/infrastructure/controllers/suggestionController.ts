import { inject, injectable } from 'tsyringe'

import { MakeSuggestion } from '../../domain/useCases/makeSuggestion'
import { GetSuggestions } from '../../domain/useCases/getSuggestions'

@injectable()
export class SuggestionController {
    constructor(
        @inject('MakeSuggestion') private makeSuggestionUseCase: MakeSuggestion,
        @inject('GetSuggestions') private getSuggestionsUseCase: GetSuggestions) {
    }

    makeSuggestion(userId: number, date: Date): Promise<unknown> {
        return this.makeSuggestionUseCase.do(userId, date)
    }

    getSuggestions(userId: number, start: Date, end: Date): Promise<unknown> {
        return this.getSuggestionsUseCase.do(userId, start, end)
    }

}