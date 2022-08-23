import { inject, injectable } from 'tsyringe'

import { IBazProvider } from '../repositories/iBazProvider'

@injectable()
export class SomeUseCase {
    constructor (@inject('IBazProvider') private entitiesProvider: IBazProvider) {
    }

    async doSomething (num: number): Promise<unknown> {
        return this.entitiesProvider.addOne(num)
    }

}