import { inject, injectable } from 'tsyringe'

import { IEntitiesProvider } from '../repositories/iEntitiesProvider'

@injectable()
export class SomeUseCase {
    constructor (@inject('IEntitiesProvider') private entitiesProvider: IEntitiesProvider) {
    }

    async doSomething (num: number): Promise<unknown> {
        return this.entitiesProvider.addOne(num)
    }

}