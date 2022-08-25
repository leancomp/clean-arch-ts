export class FakeHttpClient {
    async get(url: string): Promise<any> {
        const randValue = Math.floor(Math.random() * 10)
        const randDelay = Math.floor(Math.random() * 1400)
        return new Promise(resolve => setTimeout(() => resolve(randValue), randDelay));
    }
}