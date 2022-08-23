import { inject, injectable } from 'tsyringe'

import { IBazProvider } from '../repositories/iBazProvider'

@injectable()
export class SomeOtherUseCase {
    constructor (@inject('IBazProvider') private entitiesProvider: IBazProvider) {
    }

    async doSomethingElse (word: string): Promise<unknown> {
        return this.entitiesProvider.doMagic(word)
    }

}