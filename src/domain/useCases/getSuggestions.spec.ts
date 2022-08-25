import "reflect-metadata"
import { stubInterface } from 'ts-sinon'
import { GetSuggestions } from './getSuggestions'
import { SuggestionsProvider } from '../repositories/suggestionsProvider'
import { Suggestion } from '../entities/suggestion'
import { expect } from 'chai'

describe('getSuggestions use case', () => {
    let useCase: GetSuggestions
    const userId = 1
    const expectedSuggestions = [
        new Suggestion(userId, new Date(), 10),
        new Suggestion(userId, new Date(), 11),
        new Suggestion(userId, new Date(), 12),
    ]

    before(() => {
        const providerStub = stubInterface<SuggestionsProvider>()
        providerStub.getFor.returns(Promise.resolve(expectedSuggestions))

        useCase = new GetSuggestions(providerStub)
    })

    describe('fetch suggestions', () => {
        it('should find suggestions', async () => {
            const returnedSuggestions = await useCase.do(userId, new Date(), new Date())
            expect(returnedSuggestions.length).eq(3)
            expect(returnedSuggestions).eq(expectedSuggestions)
        })
    })
})