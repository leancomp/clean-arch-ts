import { Something } from '../entities/something'

export interface ModelProvider {
    getSomething(userId: number): Promise<Something>
}