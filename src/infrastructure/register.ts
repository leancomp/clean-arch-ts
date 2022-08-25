import 'reflect-metadata'
import { container } from 'tsyringe'

import { Config } from '../delivery/config'
import { DynamoConfig, ModelProviderConfig } from './config'

import { FakeHttpClient } from './clients/fakeHttpClient'
import { FakeDynamoDbClient } from './clients/fakeDynamoDbClient'

import { DynamoSuggestionsProvider } from './repositories/dynamoSuggestionsProvider'
import { InMemorySuggestionsProvider } from './repositories/inMemorySuggestionsProvider'
import { HttpModelProvider } from './repositories/httpModelProvider'

import { SuggestionController } from './controllers/suggestionController'

import { MakeSuggestion } from '../domain/useCases/makeSuggestion'
import { GetSuggestions } from '../domain/useCases/getSuggestions'

const { dynamodb, modelProvider, environment } = Config
const isLocal = environment === 'local'

container.registerInstance('DynamoConfig', new DynamoConfig(dynamodb))
container.registerInstance('ModelProviderConfig', new ModelProviderConfig(modelProvider))

container.registerSingleton('HttpClient', FakeHttpClient)

if (isLocal) {
    container.registerSingleton('SuggestionsProvider', InMemorySuggestionsProvider)
} else {
    container.registerSingleton('DynamoDbClient', FakeDynamoDbClient)
    container.registerSingleton('SuggestionsProvider', DynamoSuggestionsProvider)
}

container.registerSingleton('ModelProvider', HttpModelProvider)

container.register('SuggestionController', SuggestionController)

container.register('MakeSuggestion', MakeSuggestion)
container.register('GetSuggestions', GetSuggestions)


export const diContainer = container
