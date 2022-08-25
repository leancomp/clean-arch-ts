import { Something } from './something'

export class Suggestion {
    constructor(public userId: number, public date: Date, public value?: number) {
    }

    calculateValue(something: Something) {
        this.value = something * 3
    }
}