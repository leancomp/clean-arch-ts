import { Suggestion } from '../entities/suggestion'

export interface SuggestionsProvider {
    addOne(suggestion: Suggestion): Promise<Suggestion>
    getFor(userId: number, start: Date, end: Date): Promise<Suggestion[]>
}