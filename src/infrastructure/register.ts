import 'reflect-metadata'
import { container } from 'tsyringe'

import { ExampleController } from '../domain/controllers/exampleController'
import { SomeUseCase } from '../domain/useCases/someUseCase'
import { SomeOtherUseCase } from '../domain/useCases/someOtherUseCase'

import { SomeBazProvider } from './repositories/someBazProvider'
import { AnotherBazProvider } from './repositories/anotherBazProvider'

import { FakeClient } from './clients/fakeClient'

const isLocal = !!process.env.LOCAL_ENVIRONMENT

const client = new FakeClient()
client.connect()
container.registerInstance('FakeClient', client)

if (isLocal) {
    container.registerSingleton('IBazProvider', SomeBazProvider)
} else {
    container.registerSingleton('IBazProvider', AnotherBazProvider)
}

container.register('ExampleController', ExampleController)
container.register('SomeUseCase', SomeUseCase)
container.register('SomeOtherUseCase', SomeOtherUseCase)

export const diContainer = container
