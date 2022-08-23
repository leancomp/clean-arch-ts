import { Foo } from '../entities/foo'
import { Bar } from '../entities/bar'

export interface IBazProvider {
    addOne(num: number): Promise<Foo>
    doMagic(word: string): Promise<Bar[]>
}