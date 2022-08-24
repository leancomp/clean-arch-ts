import { inject, injectable } from 'tsyringe'
import { SomeUseCase } from '../../domain/useCases/someUseCase'
import { SomeOtherUseCase } from '../../domain/useCases/someOtherUseCase'

@injectable()
export class ExampleController {
    constructor(
        @inject('SomeUseCase') private someUseCase: SomeUseCase,
        @inject('SomeOtherUseCase') private someOtherUseCase: SomeOtherUseCase) {
    }

    doSomething(num: number): Promise<unknown> {
        return this.someUseCase.doSomething(num)
    }

    doSomethingElse(word: string): Promise<unknown> {
        return this.someOtherUseCase.doSomethingElse(word)
    }

}