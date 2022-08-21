import { inject, injectable} from 'tsyringe'
import { IEntitiesProvider } from '../../domain/repositories/iEntitiesProvider'
import { Foo } from '../../domain/entities/foo'
import { Bar } from '../../domain/entities/bar'
import {FakeClient} from "../clients/fakeClient";

@injectable()
export class ExternalEntitiesProvider implements IEntitiesProvider {
    constructor(@inject('FakeClient') private client: FakeClient) {
    }

    addOne(num: number): Promise<Foo> {
        console.log('Running addOne() on entities provider externally')
        return this.client.mimic(String(num + 1) as Foo)
    }

    doMagic(word: string): Promise<Bar[]> {
        console.log('Running doMagic() on entities provider externally')
        const rand = Math.floor(Math.random() * 10)
        const magicChars = word
            .split('')
            .map(i => String.fromCharCode(i.charCodeAt(0) + rand))

        return this.client.mimic(magicChars as Bar[])
    }

}