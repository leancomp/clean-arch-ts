import { injectable } from 'tsyringe'
import { IEntitiesProvider } from '../../domain/repositories/iEntitiesProvider'
import { Foo } from '../../domain/entities/foo'
import { Bar } from '../../domain/entities/bar'

@injectable()
export class LocalEntitiesProvider implements IEntitiesProvider {
    addOne(num: number): Promise<Foo> {
        console.log('Running addOne() on entities provider locally')

        return Promise.resolve(String(num + 1) as Foo)
    }

    doMagic(word: string): Promise<Bar[]> {
        console.log('Running doMagic() on entities provider locally')
        const rand = Math.floor(Math.random() * 10)
        const magicChars = word
            .split('')
            .map(i => String.fromCharCode(i.charCodeAt(0) + rand))

        return Promise.resolve(magicChars as Bar[])
    }

}