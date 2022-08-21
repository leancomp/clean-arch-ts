import { diContainer } from '../infrastructure/register'
import { ExampleController } from '../domain/controllers/exampleController'

async function run(): Promise<void> {
    const controller: ExampleController = diContainer.resolve('ExampleController')
    const something = await controller.doSomething(3)
    console.log('something', something)
    const somethingElse = await controller.doSomethingElse('hello')
    console.log('somethingElse', somethingElse)
}

(async () => {
    await run()
})()