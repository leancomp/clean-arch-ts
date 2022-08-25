import { inject, injectable } from 'tsyringe'

import { ModelProvider } from '../../domain/repositories/modelProvider'
import { Something } from '../../domain/entities/something'
import { FakeHttpClient } from '../clients/fakeHttpClient'
import { ModelProviderConfig } from '../config'

@injectable()
export class HttpModelProvider implements ModelProvider {
    constructor(@inject('ModelProviderConfig') private config: ModelProviderConfig,
                @inject('HttpClient') private client: FakeHttpClient) {
    }

    async getSomething(userId: number): Promise<Something> {
        const url = this.config.getSomethingUrl + '/' +userId

        const something = await this.client.get(url)
        return something
    }

}