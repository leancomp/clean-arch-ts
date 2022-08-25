import "reflect-metadata"
import sinon, { StubbedInstance, stubInterface } from 'ts-sinon'
import { expect } from 'chai'

import { MakeSuggestion } from './makeSuggestion'
import { SuggestionsProvider } from '../repositories/suggestionsProvider'
import { ModelProvider } from '../repositories/modelProvider'
import { Suggestion } from '../entities/suggestion'
import { Something } from '../entities/something'

describe('makeSuggestion use case', () => {
    let useCase: MakeSuggestion
    let suggestionsProviderStub: StubbedInstance<SuggestionsProvider>

    const userId = 1
    const something: Something = 10
    const expectedSuggestion = new Suggestion(userId, new Date(), 30)

    before(() => {
        const modelProviderStub = stubInterface<ModelProvider>()
        modelProviderStub.getSomething.returns(Promise.resolve(something))

        suggestionsProviderStub = stubInterface<SuggestionsProvider>()
        suggestionsProviderStub.addOne.returns(Promise.resolve(expectedSuggestion))

        useCase = new MakeSuggestion(modelProviderStub, suggestionsProviderStub)
    })

    describe('make suggestions', () => {
        it('should add new suggestion', async () => {
            const expectedValue = 30
            const newSuggestion = await useCase.do(userId, new Date())

            expect(newSuggestion).not.undefined
            expect(newSuggestion).not.null
            expect(newSuggestion.value).eq(expectedValue)
            expect(suggestionsProviderStub.addOne.calledOnce).true
            expect(suggestionsProviderStub.addOne.calledWith(sinon.match({ value: expectedValue }))).true
        })
    })
})