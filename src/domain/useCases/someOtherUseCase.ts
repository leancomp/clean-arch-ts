import { inject, injectable } from 'tsyringe'

import { IEntitiesProvider } from '../repositories/iEntitiesProvider'

@injectable()
export class SomeOtherUseCase {
    constructor (@inject('IEntitiesProvider') private entitiesProvider: IEntitiesProvider) {
    }

    async doSomethingElse (word: string): Promise<unknown> {
        return this.entitiesProvider.doMagic(word)
    }

}