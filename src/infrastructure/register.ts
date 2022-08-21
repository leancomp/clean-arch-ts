import 'reflect-metadata'
import { container } from 'tsyringe'

import { LocalEntitiesProvider } from './repositories/localEntitiesProvider'
import { ExternalEntitiesProvider } from './repositories/externalEntitiesProvider'
import { FakeClient } from './clients/fakeClient'
import { ExampleController } from '../domain/controllers/exampleController'
import { SomeUseCase } from '../domain/useCases/someUseCase'
import { SomeOtherUseCase } from '../domain/useCases/someOtherUseCase'

const isLocal = !!process.env.LOCAL_ENVIRONMENT

container.registerInstance('FakeClient', new FakeClient())
if (isLocal) {
    container.registerSingleton('IEntitiesProvider', LocalEntitiesProvider)
} else {
    container.registerSingleton('IEntitiesProvider', ExternalEntitiesProvider)
}

container.registerSingleton('ExampleController', ExampleController)
container.registerSingleton('SomeUseCase', SomeUseCase)
container.registerSingleton('SomeOtherUseCase', SomeOtherUseCase)

export const diContainer = container
