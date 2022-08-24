import { diContainer } from '../../infrastructure/register'
import { ExampleController } from '../../infrastructure/controllers/exampleController'

async function run(): Promise<void> {
    const controller: ExampleController = diContainer.resolve('ExampleController')

    const something = await controller.doSomething(3)
    console.log('doSomething(3)', something)

    const somethingElse = await controller.doSomethingElse('hello')
    console.log('doSomethingElse(\'hello\')', somethingElse)
}

(async () => {
    await run()
})()