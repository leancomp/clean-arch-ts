import { inject, injectable} from 'tsyringe'
import { IBazProvider } from '../../domain/repositories/iBazProvider'
import { Foo } from '../../domain/entities/foo'
import { Bar } from '../../domain/entities/bar'
import { FakeClient } from '../clients/fakeClient'

@injectable()
export class AnotherBazProvider implements IBazProvider {
    constructor(@inject('FakeClient') private client: FakeClient) {
    }

    addOne(num: number): Promise<Foo> {
        console.log('[AnotherBazProvider] Running addOne() on baz provider externally')
        return this.client.mimic(String(num + 1) as Foo)
    }

    doMagic(word: string): Promise<Bar[]> {
        console.log('[AnotherBazProvider] Running doMagic() on baz provider externally')
        const rand = Math.floor(Math.random() * 10)
        const magicChars = word
            .split('')
            .map(i => String.fromCharCode(i.charCodeAt(0) + rand))

        return this.client.mimic(magicChars as Bar[])
    }

}