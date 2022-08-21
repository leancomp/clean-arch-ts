import { Foo } from '../entities/foo'
import { Bar } from '../entities/bar'

export interface IEntitiesProvider {
    addOne(num: number): Promise<Foo>
    doMagic(word: string): Promise<Bar[]>
}