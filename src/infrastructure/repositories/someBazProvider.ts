import { injectable } from 'tsyringe'
import { IBazProvider } from '../../domain/repositories/iBazProvider'
import { Foo } from '../../domain/entities/foo'
import { Bar } from '../../domain/entities/bar'

@injectable()
export class SomeBazProvider implements IBazProvider {
    addOne(num: number): Promise<Foo> {
        console.log('[SomeBazProvider] Running addOne() on baz provider locally')

        return Promise.resolve(String(num + 1) as Foo)
    }

    doMagic(word: string): Promise<Bar[]> {
        console.log('[SomeBazProvider] Running doMagic() on baz provider locally')
        const rand = Math.floor(Math.random() * 10)
        const magicChars = word
            .split('')
            .map(i => String.fromCharCode(i.charCodeAt(0) + rand))

        return Promise.resolve(magicChars as Bar[])
    }

}